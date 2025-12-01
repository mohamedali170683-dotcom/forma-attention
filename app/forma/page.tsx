import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Target, Sparkles, BarChart3, Users } from "lucide-react";

export default function FormaLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold">Forma & Attention</h1>
          </div>
          <Link href="/forma/assessment">
            <Button size="lg">Take Assessment</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Behavioral Science Optimization Platform</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Engineer Persuasion with Proven Behavioral Science
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Want to improve conversions without doubling your ad spend? Get your <strong>BSOS Score</strong> (0-100) 
            and discover exactly which behavioral science principles you're missing.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/forma/assessment">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Free Assessment
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-4">✓ 5-10 minutes · ✓ 33 metrics · ✓ Personalized recommendations</p>
        </div>
      </section>

      {/* BSOS Explanation */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">What is the BSOS Score?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The Behavioral Science Optimization Score quantifies how effectively you're applying 
              psychological principles across your marketing channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Website/Blog</CardTitle>
                <CardDescription>0-33 points</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Bias implementation, choice architecture, visual psychology, social proof, 
                  and journey optimization on your website.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>0-33 points</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Content engagement, behavioral triggers, storytelling, community building, 
                  and emotional psychology in social content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Paid Advertising</CardTitle>
                <CardDescription>0-34 points</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Creative effectiveness, persuasion architecture, landing page alignment, 
                  and conversion optimization in paid campaigns.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <h4 className="text-2xl font-bold">Score Interpretation</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="font-semibold">75-100: Sophisticated</p>
                  <p className="text-sm text-gray-600">Advanced behavioral design implementation</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <p className="font-semibold">50-74: Moderate</p>
                  <p className="text-sm text-gray-600">Good foundation with clear opportunities</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                <div>
                  <p className="font-semibold">25-49: Limited</p>
                  <p className="text-sm text-gray-600">Basic application, significant upside potential</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <div>
                  <p className="font-semibold">0-24: Minimal</p>
                  <p className="text-sm text-gray-600">High potential for conversion improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Complete Assessment</h4>
              <p className="text-gray-600">
                Answer 33 questions about your website, social media, and advertising (5-10 minutes)
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Get Your BSOS Score</h4>
              <p className="text-gray-600">
                Receive your overall score (0-100) with detailed breakdowns by channel
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Implement Recommendations</h4>
              <p className="text-gray-600">
                Get up to 6 personalized recommendations with impact estimates and timelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Foundation */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Built on Proven Science</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Robert Cialdini</CardTitle>
                <CardDescription className="italic">Influence: The Psychology of Persuasion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  6 principles of persuasion: reciprocity, commitment, social proof, authority, liking, and scarcity
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daniel Kahneman</CardTitle>
                <CardDescription className="italic">Thinking, Fast and Slow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Cognitive biases, loss aversion, anchoring, and the two systems of thinking
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thaler & Sunstein</CardTitle>
                <CardDescription className="italic">Nudge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Choice architecture, defaults, and designing environments that influence decisions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Ready to Engineer Persuasion?</h3>
          <p className="text-xl mb-8 text-purple-100">
            Discover your BSOS score and unlock data-driven recommendations to boost conversions
          </p>
          <Link href="/forma/assessment">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Free Assessment Now
            </Button>
          </Link>
          <p className="text-sm mt-4 text-purple-200">No credit card required · Takes 5-10 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>Built with behavioral science and modern web technologies</p>
          <p className="mt-2">© 2025 Forma & Attention. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
