import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateScores } from "@/lib/scoring";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { responses, companyName, email, industry } = body;

    if (!responses) {
      return NextResponse.json(
        { error: "Responses are required" },
        { status: 400 }
      );
    }

    // Calculate scores
    const scores = calculateScores(responses);

    // Save to database
    const assessment = await prisma.assessment.create({
      data: {
        totalScore: scores.totalScore,
        websiteScore: scores.websiteScore,
        socialScore: scores.socialScore,
        adScore: scores.adScore,
        responses: responses,
        companyName: companyName || null,
        email: email || null,
        industry: industry || null,
      },
    });

    return NextResponse.json({
      id: assessment.id,
      scores,
    });
  } catch (error) {
    console.error("Error saving assessment:", error);
    return NextResponse.json(
      { error: "Failed to save assessment" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Assessment ID is required" },
        { status: 400 }
      );
    }

    const assessment = await prisma.assessment.findUnique({
      where: { id },
    });

    if (!assessment) {
      return NextResponse.json(
        { error: "Assessment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(assessment);
  } catch (error) {
    console.error("Error fetching assessment:", error);
    return NextResponse.json(
      { error: "Failed to fetch assessment" },
      { status: 500 }
    );
  }
}
