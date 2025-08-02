import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Users, Baby, Calendar, Trophy, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { DemoBanner } from "@/components/demo-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-4">
        <DemoBanner />
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Understand Your Mental Health</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take our comprehensive mood assessments and get personalized insights about your mental well-being
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/mood-test">Start Mood Test</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://stirring-chimera-f878f3.netlify.app/" target="_blank">
                Mood Tracker
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Assessment Type</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/assessment/individual">
                <CardHeader className="text-center">
                  <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Individual Therapy</CardTitle>
                  <CardDescription>Personal mental health assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Evaluate your anxiety, depression, and stress levels with our comprehensive individual assessment.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/assessment/couples">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                  <CardTitle>Couples Therapy</CardTitle>
                  <CardDescription>Relationship health check</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Assess communication, trust, and conflict resolution in your relationship.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/assessment/family">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Family Therapy</CardTitle>
                  <CardDescription>Family dynamics evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Evaluate family roles, support systems, and communication patterns.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href="/assessment/child">
                <CardHeader className="text-center">
                  <Baby className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Child Therapy</CardTitle>
                  <CardDescription>Child mood & behavior check</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Parent-reported assessment for children's emotional and behavioral well-being.
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Time-Based Assessment</h4>
              <p className="text-gray-600">Choose your assessment period: last week, 2 weeks, 4 weeks, or 3 months</p>
            </div>
            <div className="text-center">
              <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Instant Results</h4>
              <p className="text-gray-600">
                Get immediate feedback with detailed explanations and personalized recommendations
              </p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Professional Support</h4>
              <p className="text-gray-600">
                Connect with licensed therapists and counselors when you need professional help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Mental Health Journey?</h3>
          <p className="text-xl mb-8">
            Take the first step towards better mental health with our comprehensive assessments
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/mood-test">Begin Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">MOOD ANALYZER</span>
              </div>
              <p className="text-gray-400">
                Comprehensive mental health assessment platform for individuals, couples, families, and children.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Assessments</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/assessment/individual" className="hover:text-white">
                    Individual
                  </Link>
                </li>
                <li>
                  <Link href="/assessment/couples" className="hover:text-white">
                    Couples
                  </Link>
                </li>
                <li>
                  <Link href="/assessment/family" className="hover:text-white">
                    Family
                  </Link>
                </li>
                <li>
                  <Link href="/assessment/child" className="hover:text-white">
                    Child
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/mood-test" className="hover:text-white">
                    Mood Test
                  </Link>
                </li>
                <li>
                  <Link href="/self-help" className="hover:text-white">
                    Self-Help
                  </Link>
                </li>
                <li>
                  <Link href="/professionals" className="hover:text-white">
                    Find Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mood Analyzer. All rights reserved.</p>
            <p className="mt-2 text-sm">
              <strong>Disclaimer:</strong> This tool is not a substitute for professional medical advice. Please consult
              a healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
