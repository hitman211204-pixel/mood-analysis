"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Brain, ArrowLeft } from "lucide-react"

const questions = [
  {
    id: 1,
    text: "Feeling nervous, anxious, or on edge?",
    category: "anxiety",
  },
  {
    id: 2,
    text: "Little interest or pleasure in doing things?",
    category: "depression",
  },
  {
    id: 3,
    text: "Feeling down, depressed, or hopeless?",
    category: "depression",
  },
  {
    id: 4,
    text: "Trouble relaxing or feeling restless?",
    category: "anxiety",
  },
  {
    id: 5,
    text: "Feeling tired or having little energy?",
    category: "general",
  },
]

const options = [
  { value: "0", label: "Not at all", score: 0 },
  { value: "1", label: "Several days", score: 1 },
  { value: "2", label: "More than half the days", score: 2 },
  { value: "3", label: "Nearly every day", score: 3 },
]

export default function IndividualAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: number }>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0)
  }

  const getResultAnalysis = (score: number) => {
    if (score <= 4) {
      return {
        level: "Minimal",
        color: "text-green-600",
        bgColor: "bg-green-50",
        description:
          "You may be experiencing mild symptoms. Try self-help strategies like deep breathing, exercise, or journaling.",
        recommendations: [
          "Practice daily mindfulness or meditation",
          "Maintain regular exercise routine",
          "Keep a mood journal",
          "Ensure adequate sleep (7-9 hours)",
          "Stay connected with supportive friends and family",
        ],
        needsProfessionalHelp: false,
      }
    } else if (score <= 9) {
      return {
        level: "Mild to Moderate",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        description:
          "Symptoms are noticeable. Consider self-help strategies and monitor for 2 weeks. If no improvement, seek professional help.",
        recommendations: [
          "Try mindfulness apps or guided meditation",
          "Consider online therapy or counseling",
          "Establish a daily routine",
          "Limit alcohol and caffeine",
          "Practice stress management techniques",
        ],
        needsProfessionalHelp: false,
      }
    } else {
      return {
        level: "Moderate to Severe",
        color: "text-red-600",
        bgColor: "bg-red-50",
        description:
          "Significant symptoms detected. We strongly recommend consulting a professional therapist for support.",
        recommendations: [
          "Schedule an appointment with a mental health professional",
          "Consider therapy (CBT, DBT, or other evidence-based treatments)",
          "Speak with your primary care physician",
          "Join a support group",
          "Create a safety plan if needed",
        ],
        needsProfessionalHelp: true,
      }
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    const score = calculateScore()
    const analysis = getResultAnalysis(score)

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="h-5 w-5 text-gray-600 mr-2" />
                  <Brain className="h-8 w-8 text-purple-600 mr-2" />
                  <h1 className="text-2xl font-bold text-purple-600">MOOD ANALYZER</h1>
                </Link>
              </div>
              <div className="text-sm text-gray-600">Individual Assessment Results</div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto py-12 px-4">
          <Card className={`${analysis.bgColor} border-2`}>
            <CardHeader>
              <CardTitle className={`text-2xl ${analysis.color}`}>Individual Assessment Results</CardTitle>
              <CardDescription className="text-lg">
                Your total score: {score}/15 - {analysis.level}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-purple-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${(score / 15) * 100}%` }}
                  ></div>
                </div>
                <p className="text-gray-700 mb-4">{analysis.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Recommended Actions:</h3>
                <ul className="space-y-2">
                  {analysis.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {analysis.needsProfessionalHelp && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Professional Help Recommended</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Based on your responses, speaking with a mental health professional would be beneficial.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/professionals">Find a Therapist</Link>
                  </Button>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/assessment/individual">Retake Assessment</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/self-help">Self-Help Resources</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> This assessment is not a substitute for professional medical advice. Please
            consult a healthcare provider for proper diagnosis and treatment.
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="h-5 w-5 text-gray-600 mr-2" />
                <Brain className="h-8 w-8 text-purple-600 mr-2" />
                <h1 className="text-2xl font-bold text-purple-600">MOOD ANALYZER</h1>
              </Link>
            </div>
            <div className="text-sm text-gray-600">Individual Assessment</div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{questions[currentQuestion].text}</CardTitle>
            <CardDescription>Over the last 2 weeks, how often have you been bothered by this?</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[questions[currentQuestion].id]?.toString() || ""}
              onValueChange={(value) => handleAnswer(questions[currentQuestion].id, Number.parseInt(value))}
            >
              {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
                Previous
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!answers[questions[currentQuestion].id] && answers[questions[currentQuestion].id] !== 0}
                className="bg-purple-600 hover:bg-purple-700"
              >
                {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
