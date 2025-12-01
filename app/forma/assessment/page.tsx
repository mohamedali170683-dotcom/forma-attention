"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { assessmentQuestions } from "@/lib/assessment-data";
import { Brain, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AssessmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<{ [key: string]: number }>({});
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    email: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Split questions into 4 steps
  const websiteQuestions = assessmentQuestions.filter((q) => q.channel === "website");
  const socialQuestions = assessmentQuestions.filter((q) => q.channel === "social");
  const adsQuestions = assessmentQuestions.filter((q) => q.channel === "ads");

  const steps = [
    { title: "Company Info", questions: [] as typeof assessmentQuestions },
    { title: "Website/Blog", questions: websiteQuestions },
    { title: "Social Media", questions: socialQuestions },
    { title: "Paid Advertising", questions: adsQuestions },
  ];

  const currentStepData = steps[step];
  const totalSteps = steps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleSliderChange = (questionId: string, value: number) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const getSliderLabel = (value: number): string => {
    if (value === 0) return "Not at all";
    if (value === 1) return "Minimal";
    if (value === 2) return "Moderate";
    if (value === 3) return "Strong";
    return "Not at all";
  };

  const getSliderColor = (value: number): string => {
    if (value === 0) return "text-red-600";
    if (value === 1) return "text-yellow-600";
    if (value === 2) return "text-blue-600";
    if (value === 3) return "text-green-600";
    return "text-gray-600";
  };

  const canProceed = () => {
    if (step === 0) {
      // Company info is optional, always can proceed
      return true;
    }
    // Check if all questions in current step are answered
    const currentQuestions = currentStepData.questions;
    return currentQuestions.every((q) => responses[q.id] !== undefined);
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          responses,
          companyName: companyInfo.companyName || null,
          email: companyInfo.email || null,
          industry: companyInfo.industry || null,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit assessment");
      }

      const data = await response.json();
      router.push(`/forma/results/${data.id}`);
    } catch (error) {
      console.error("Error submitting assessment:", error);
      alert("Failed to submit assessment. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold">BSOS Assessment</h1>
          </div>
          <div className="text-sm text-gray-600">
            Step {step + 1} of {totalSteps}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="sticky top-[73px] z-40 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Progress value={progress} className="h-3" />
          <p className="text-sm text-gray-600 mt-2 text-center">
            {Math.round(progress)}% Complete
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="border-2 shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl mb-2">{currentStepData.title}</CardTitle>
            {step === 0 && (
              <CardDescription className="text-base">
                Help us personalize your results (optional)
              </CardDescription>
            )}
            {step > 0 && (
              <CardDescription className="text-base">
                Rate each element from 0 (not at all) to 3 (strong implementation)
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Step 0: Company Info */}
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyInfo.companyName}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, companyName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email (for results)
                  </label>
                  <input
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={companyInfo.industry}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, industry: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="SaaS, E-commerce, etc."
                  />
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  All fields are optional. Skip to start the assessment.
                </p>
              </div>
            )}

            {/* Steps 1-3: Questions */}
            {step > 0 &&
              currentStepData.questions.map((question, index) => {
                const value = responses[question.id] ?? 0;
                return (
                  <div
                    key={question.id}
                    className="p-6 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-purple-600">
                            {question.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {index + 1}. {question.text}
                        </h3>
                        <p className="text-sm text-gray-600">{question.description}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Your rating:</span>
                        <span className={`text-lg font-bold ${getSliderColor(value)}`}>
                          {getSliderLabel(value)}
                        </span>
                      </div>
                      <Slider
                        value={value}
                        onChange={(val) => handleSliderChange(question.id, val)}
                        min={0}
                        max={3}
                        step={1}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Not at all</span>
                        <span>Minimal</span>
                        <span>Moderate</span>
                        <span>Strong</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </CardContent>

          {/* Navigation */}
          <div className="border-t p-6 flex items-center justify-between">
            <Button
              onClick={handleBack}
              variant="outline"
              disabled={step === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            {step < totalSteps - 1 && (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}

            {step === totalSteps - 1 && (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="gap-2 bg-green-600 hover:bg-green-700"
              >
                {isSubmitting ? (
                  <>Calculating...</>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Submit & View Results
                  </>
                )}
              </Button>
            )}
          </div>
        </Card>

        {/* Help Text */}
        {step > 0 && (
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Rating Guide:</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li><strong>0 - Not at all:</strong> This element is not implemented</li>
              <li><strong>1 - Minimal:</strong> Basic implementation with significant room for improvement</li>
              <li><strong>2 - Moderate:</strong> Good implementation with some opportunities to enhance</li>
              <li><strong>3 - Strong:</strong> Excellent implementation following best practices</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
