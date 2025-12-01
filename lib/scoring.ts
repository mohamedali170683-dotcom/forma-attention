// Scoring logic and recommendation generation

import { assessmentQuestions } from "./assessment-data";

export interface AssessmentResponse {
  [questionId: string]: number;
}

export interface ScoreBreakdown {
  totalScore: number;
  websiteScore: number;
  socialScore: number;
  adScore: number;
  percentage: number;
  websitePercentage: number;
  socialPercentage: number;
  adPercentage: number;
}

export interface Recommendation {
  title: string;
  description: string;
  impact: "High" | "Medium" | "Low";
  effort: "Low" | "Medium" | "High";
  timeline: string;
  channel: "website" | "social" | "ads" | "all";
}

export function calculateScores(responses: AssessmentResponse): ScoreBreakdown {
  let websiteScore = 0;
  let socialScore = 0;
  let adScore = 0;

  assessmentQuestions.forEach((question) => {
    const score = responses[question.id] || 0;
    if (question.channel === "website") {
      websiteScore += score;
    } else if (question.channel === "social") {
      socialScore += score;
    } else if (question.channel === "ads") {
      adScore += score;
    }
  });

  const totalScore = websiteScore + socialScore + adScore;
  const maxTotal = 100;
  const maxWebsite = 33;
  const maxSocial = 33;
  const maxAds = 34;

  return {
    totalScore,
    websiteScore,
    socialScore,
    adScore,
    percentage: Math.round((totalScore / maxTotal) * 100),
    websitePercentage: Math.round((websiteScore / maxWebsite) * 100),
    socialPercentage: Math.round((socialScore / maxSocial) * 100),
    adPercentage: Math.round((adScore / maxAds) * 100),
  };
}

export function generateRecommendations(
  responses: AssessmentResponse,
  scores: ScoreBreakdown
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Analyze weak areas and provide specific recommendations
  const weakQuestions = assessmentQuestions
    .map((q) => ({
      ...q,
      score: responses[q.id] || 0,
      gap: q.maxScore - (responses[q.id] || 0),
    }))
    .filter((q) => q.gap >= 2) // Only questions with significant gap
    .sort((a, b) => b.gap - a.gap) // Sort by biggest gaps
    .slice(0, 10); // Top 10 opportunities

  // Website recommendations
  const websiteWeak = weakQuestions.filter((q) => q.channel === "website");
  if (websiteWeak.length > 0 && scores.websitePercentage < 70) {
    const topIssue = websiteWeak[0];
    recommendations.push({
      title: `Enhance ${topIssue.category} on Website`,
      description: `${topIssue.text}: ${topIssue.description} This is currently underutilized and represents a significant opportunity for conversion improvement.`,
      impact: topIssue.gap >= 3 ? "High" : "Medium",
      effort: "Medium",
      timeline: "2-4 weeks",
      channel: "website",
    });
  }

  // Social media recommendations
  const socialWeak = weakQuestions.filter((q) => q.channel === "social");
  if (socialWeak.length > 0 && scores.socialPercentage < 70) {
    const topIssue = socialWeak[0];
    recommendations.push({
      title: `Improve ${topIssue.category} in Social Media`,
      description: `${topIssue.text}: ${topIssue.description} Implementing this can significantly boost engagement and brand trust.`,
      impact: topIssue.gap >= 3 ? "High" : "Medium",
      effort: "Low",
      timeline: "1-2 weeks",
      channel: "social",
    });
  }

  // Ads recommendations
  const adsWeak = weakQuestions.filter((q) => q.channel === "ads");
  if (adsWeak.length > 0 && scores.adPercentage < 70) {
    const topIssue = adsWeak[0];
    recommendations.push({
      title: `Optimize ${topIssue.category} in Advertising`,
      description: `${topIssue.text}: ${topIssue.description} This optimization can improve ad performance and ROI.`,
      impact: topIssue.gap >= 3 ? "High" : "Medium",
      effort: "Medium",
      timeline: "1-3 weeks",
      channel: "ads",
    });
  }

  // Overall strategic recommendations based on score
  if (scores.percentage < 50) {
    recommendations.push({
      title: "Establish Behavioral Science Foundation",
      description:
        "Your current BSOS score indicates limited behavioral science application. Focus on implementing core principles like social proof, clear CTAs, and visual hierarchy across all channels. This will create a strong foundation for conversion optimization.",
      impact: "High",
      effort: "High",
      timeline: "4-8 weeks",
      channel: "all",
    });
  } else if (scores.percentage < 75) {
    recommendations.push({
      title: "Enhance Cross-Channel Consistency",
      description:
        "You have moderate behavioral science application. Focus on creating consistent persuasion architecture across website, social, and ads. Ensure messaging, social proof, and urgency tactics are aligned for maximum impact.",
      impact: "High",
      effort: "Medium",
      timeline: "3-6 weeks",
      channel: "all",
    });
  }

  // Add specific tactical recommendations
  if (scores.websiteScore < 20) {
    recommendations.push({
      title: "Implement Website Social Proof Suite",
      description:
        "Add testimonials, reviews, case studies, and trust badges to your website. Display real-time activity notifications and customer counts to leverage social proof psychology.",
      impact: "High",
      effort: "Medium",
      timeline: "2-3 weeks",
      channel: "website",
    });
  }

  if (scores.socialScore < 20) {
    recommendations.push({
      title: "Develop Social Media Engagement Strategy",
      description:
        "Create a content calendar focused on interactive posts (polls, questions, UGC). Use storytelling and emotional triggers to increase engagement and build community.",
      impact: "Medium",
      effort: "Low",
      timeline: "1-2 weeks",
      channel: "social",
    });
  }

  if (scores.adScore < 20) {
    recommendations.push({
      title: "Rebuild Ad Creative with Behavioral Principles",
      description:
        "Redesign ad creatives to include clear urgency signals, social proof elements, and benefit-focused headlines. Ensure landing pages match ad promises perfectly.",
      impact: "High",
      effort: "High",
      timeline: "3-4 weeks",
      channel: "ads",
    });
  }

  // Return top 6 recommendations
  return recommendations.slice(0, 6);
}

export function getScoreLabel(percentage: number): string {
  if (percentage >= 75) return "Sophisticated";
  if (percentage >= 50) return "Moderate";
  if (percentage >= 25) return "Limited";
  return "Minimal";
}

export function getScoreColor(percentage: number): string {
  if (percentage >= 75) return "text-green-600";
  if (percentage >= 50) return "text-blue-600";
  if (percentage >= 25) return "text-yellow-600";
  return "text-red-600";
}
