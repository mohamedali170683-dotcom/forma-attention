import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { calculateScores, generateRecommendations, getScoreLabel, getScoreColor } from "@/lib/scoring";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  TrendingUp,
  Target,
  Users,
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight,
  Download,
  Share2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ResultsPage({ params }: PageProps) {
  const { id } = await params;

  const assessment = await prisma.assessment.findUnique({
    where: { id },
  });

  if (!assessment) {
    notFound();
  }

  const responses = assessment.responses as { [key: string]: number };
  const scores = calculateScores(responses);
  const recommendations = generateRecommendations(responses, scores);

  const impactColors = {
    High: "text-red-600 bg-red-50 border-red-200",
    Medium: "text-yellow-600 bg-yellow-50 border-yellow-200",
    Low: "text-green-600 bg-green-50 border-green-200",
  };

  const effortColors = {
    High: "text-purple-600 bg-purple-50",
    Medium: "text-blue-600 bg-blue-50",
    Low: "text-green-600 bg-green-50",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold">Your BSOS Results</h1>
          </div>
          <Link href="/forma">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Score Card */}
        <Card className="border-2 shadow-2xl mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide mb-2 opacity-90">
                Your Behavioral Science Optimization Score
              </p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-7xl font-bold">{scores.totalScore}</div>
                <div className="text-left">
                  <div className="text-3xl font-semibold">/ 100</div>
                  <div className={`text-lg ${scores.percentage >= 75 ? 'text-green-300' : scores.percentage >= 50 ? 'text-blue-300' : scores.percentage >= 25 ? 'text-yellow-300' : 'text-red-300'}`}>
                    {getScoreLabel(scores.percentage)}
                  </div>
                </div>
              </div>
              
              {assessment.companyName && (
                <p className="text-lg opacity-90">{assessment.companyName}</p>
              )}
              
              <div className="mt-6 flex gap-3 justify-center">
                <Button variant="secondary" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Report
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Results
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Channel Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{scores.websiteScore}</div>
                  <div className="text-sm text-gray-500">/ 33</div>
                </div>
              </div>
              <CardTitle className="mt-4">Website/Blog</CardTitle>
              <CardDescription>{scores.websitePercentage}% implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={scores.websitePercentage} className="h-3" />
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{scores.socialScore}</div>
                  <div className="text-sm text-gray-500">/ 33</div>
                </div>
              </div>
              <CardTitle className="mt-4">Social Media</CardTitle>
              <CardDescription>{scores.socialPercentage}% implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={scores.socialPercentage} className="h-3" />
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{scores.adScore}</div>
                  <div className="text-sm text-gray-500">/ 34</div>
                </div>
              </div>
              <CardTitle className="mt-4">Paid Advertising</CardTitle>
              <CardDescription>{scores.adPercentage}% implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={scores.adPercentage} className="h-3" />
            </CardContent>
          </Card>
        </div>

        {/* Interpretation */}
        <Card className="border-2 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-600" />
              What Your Score Means
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {scores.percentage >= 75 && (
                <p className="text-gray-700">
                  <strong className="text-green-600">Excellent!</strong> Your score indicates sophisticated 
                  behavioral design implementation across your marketing channels. You're leveraging advanced 
                  psychological principles effectively. Focus on continuous optimization and testing to maintain 
                  your competitive edge.
                </p>
              )}
              {scores.percentage >= 50 && scores.percentage < 75 && (
                <p className="text-gray-700">
                  <strong className="text-blue-600">Good progress!</strong> You have a solid foundation in 
                  behavioral science with moderate application. There are clear opportunities to enhance your 
                  conversion optimization by implementing the recommendations below. Focus on the high-impact, 
                  low-effort improvements first.
                </p>
              )}
              {scores.percentage >= 25 && scores.percentage < 50 && (
                <p className="text-gray-700">
                  <strong className="text-yellow-600">Significant potential!</strong> Your current implementation 
                  is limited, which means you have substantial upside for conversion improvements. The recommendations 
                  below will help you systematically implement proven behavioral science principles. Start with 
                  quick wins to build momentum.
                </p>
              )}
              {scores.percentage < 25 && (
                <p className="text-gray-700">
                  <strong className="text-red-600">Huge opportunity!</strong> Your minimal application of 
                  behavioral science means you have exceptional potential for conversion improvement. Each principle 
                  you implement can yield significant ROI. Follow the prioritized recommendations to transform 
                  your marketing effectiveness.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-600" />
              Personalized Recommendations
            </CardTitle>
            <CardDescription>
              Top {recommendations.length} actions to improve your BSOS score and boost conversions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="p-6 border-2 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{rec.title}</h3>
                        <p className="text-gray-600 mb-4">{rec.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border ${impactColors[rec.impact]}`}>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {rec.impact} Impact
                      </span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${effortColors[rec.effort]}`}>
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {rec.effort} Effort
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {rec.timeline}
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 capitalize">
                      {rec.channel === "all" ? "All Channels" : rec.channel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-2 mt-8 bg-gradient-to-r from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-purple-600" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Prioritize:</strong> Start with high-impact, low-effort recommendations
                </p>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Implement:</strong> Roll out changes systematically, one channel at a time
                </p>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Measure:</strong> Track conversion metrics before and after implementation
                </p>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Iterate:</strong> Retake the assessment quarterly to track progress
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <Link href="/forma/assessment">
                <Button size="lg" className="w-full gap-2">
                  Retake Assessment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Results ID: <span className="font-mono">{id}</span>
          </p>
          <p className="mt-2">
            Save this URL to access your results anytime
          </p>
        </div>
      </div>
    </div>
  );
}
