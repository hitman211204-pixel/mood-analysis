"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { useAuth } from "@/components/auth-provider"
import { Brain, Calendar, TrendingUp, Users, Heart, Baby, BarChart3, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Assessment {
  id: string
  type: string
  score: number
  max_score: number
  created_at: string
  results: any
}

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const [assessments, setAssessments] = useState<Assessment[]>([])
  const [loadingAssessments, setLoadingAssessments] = useState(true)
  const router = useRouter()

  // Check if Supabase is configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const isSupabaseConfigured =
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== "undefined" &&
    supabaseAnonKey !== "undefined" &&
    supabaseUrl.trim() !== "" &&
    supabaseAnonKey.trim() !== ""

  useEffect(() => {
    if (!loading && !user && isSupabaseConfigured) {
      router.push("/")
      return
    }

    if (user || !isSupabaseConfigured) {
      fetchAssessments()
    }
  }, [user, loading, router, isSupabaseConfigured])

  const fetchAssessments = async () => {
    try {
      if (!isSupabaseConfigured) {
        // In demo mode, show empty state
        setAssessments([])
        setLoadingAssessments(false)
        return
      }

      const { createClient } = await import("@/lib/supabase/client")
      const supabase = createClient()

      const { data, error } = await supabase
        .from("assessments")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false })

      if (error && error.message !== "Supabase not configured") {
        throw error
      }

      setAssessments(data || [])
    } catch (error) {
      console.error("Error fetching assessments:", error)
    } finally {
      setLoadingAssessments(false)
    }
  }

  const getAssessmentIcon = (type: string) => {
    switch (type) {
      case "individual":
        return <Brain className="h-6 w-6 text-purple-600" />
      case "couples":
        return <Heart className="h-6 w-6 text-pink-600" />
      case "family":
        return <Users className="h-6 w-6 text-green-600" />
      case "child":
        return <Baby className="h-6 w-6 text-blue-600" />
      default:
        return <BarChart3 className="h-6 w-6 text-gray-600" />
    }
  }

  const getScoreColor = (score: number, maxScore = 15) => {
    const percentage = (score / maxScore) * 100
    if (percentage >= 80) return "text-green-600 bg-green-50"
    if (percentage >= 60) return "text-yellow-600 bg-yellow-50"
    return "text-red-600 bg-red-50"
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4 animate-pulse" />
            <p className="text-lg text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  // In demo mode, show dashboard without requiring authentication
  const displayName = user?.user_metadata?.full_name || user?.email || "Demo User"

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Header />

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Demo Mode Alert */}
        {!isSupabaseConfigured && (
          <Alert className="mb-8 border-orange-200 bg-orange-50">
            <AlertCircle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>Demo Dashboard:</strong> This is a preview of your dashboard. Set up Supabase to save assessments
              and track your progress over time.
            </AlertDescription>
          </Alert>
        )}

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {displayName}!</h1>
          <p className="text-lg text-gray-600">Track your mental health journey and access personalized insights.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/mood-test">
              <CardHeader className="text-center pb-4">
                <Brain className="h-10 w-10 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Quick Mood Check</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 text-center">Take a quick mood assessment</p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/assessment/individual">
              <CardHeader className="text-center pb-4">
                <BarChart3 className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Full Assessment</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 text-center">Complete detailed evaluation</p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="/professionals">
              <CardHeader className="text-center pb-4">
                <Users className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Find Help</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 text-center">Connect with professionals</p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
            <Link href="https://stirring-chimera-f878f3.netlify.app/" target="_blank">
              <CardHeader className="text-center pb-4">
                <Calendar className="h-10 w-10 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Mood Tracker</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 text-center">Daily mood tracking</p>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Assessment History */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                  Your Assessment History
                </CardTitle>
                <CardDescription>Track your progress over time with your completed assessments</CardDescription>
              </div>
              <Button asChild>
                <Link href="/assessment/individual">Take New Assessment</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loadingAssessments ? (
              <div className="text-center py-8">
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            ) : assessments.length === 0 ? (
              <div className="text-center py-8">
                <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No assessments yet</h3>
                <p className="text-gray-500 mb-4">
                  Take your first assessment to start tracking your mental health journey.
                </p>
                <Button asChild>
                  <Link href="/mood-test">Start Your First Assessment</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {assessments.map((assessment) => (
                  <div
                    key={assessment.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      {getAssessmentIcon(assessment.type)}
                      <div>
                        <h4 className="font-semibold capitalize">{assessment.type} Assessment</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(assessment.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getScoreColor(assessment.score, assessment.max_score)}>
                        Score: {assessment.score}/{assessment.max_score}
                      </Badge>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/results/${assessment.id}`}>View Results</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Mental Health Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Daily Mental Health Tips</CardTitle>
            <CardDescription>Small steps you can take today to improve your mental well-being</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Practice Mindfulness</h4>
                    <p className="text-sm text-gray-600">
                      Take 5 minutes to focus on your breathing and be present in the moment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Stay Connected</h4>
                    <p className="text-sm text-gray-600">
                      Reach out to a friend or family member you haven't spoken to in a while.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Move Your Body</h4>
                    <p className="text-sm text-gray-600">Even a short walk can boost your mood and energy levels.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">Practice Gratitude</h4>
                    <p className="text-sm text-gray-600">Write down three things you're grateful for today.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
