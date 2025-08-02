"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Users, ArrowLeft } from "lucide-react"

const questions = [
  {
    id: 1,
    text: "Do family members share responsibilities fairly?",
    category: "responsibilities",
  },
  {
    id: 2,
    text: "Do you feel emotionally supported by your family?",
    category: "support",
  },
  {
    id: 3,
    text: "Are there frequent disagreements about family roles (e.g., parenting, decision-making)?",
    category: "roles",
    reverse: true,
  },
  {
    id: 4,
    text: "Do family members listen to each other during discussions?",
    category: "communication",
  },
  {
    id: 5,
    text: "Do you feel your family works together to solve problems?",
    category: "teamwork",
  },
]

const options = [
  { value: "0", label: "Never / Not at all", score: 0 },
  { value: "1", label: "Rarely / Somewhat", score: 1 },
  { value: "2", label: "Sometimes / Mostly", score: 2 },
  { value: "3", label: "Often / Completely", score: 3 },
]

const reverseOptions = [
  { value: "0", label: "Always", score: 0 },
  { value: "1", label: "Often", score: 1 },
  { value: "2", label: "Sometimes", score: 2 },
  { value: "3", label: "Rarely", score: 3 },
]

export default function FamilyAssessmentPage() {
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
    if (score <= 5) {
      return {
        level: "Low Harmony",
        color: "text-red-600",
        bgColor: "bg-red-50",
        description: "Significant issues with roles or support. We recommend professional family therapy.",
        recommendations: [
          "Schedule family therapy sessions",
          "Hold regular family meetings to discuss issues",
          "Establish clear family roles and responsibilities",
          "Practice active listening during family discussions",
          "Work on conflict resolution skills as a family unit",
        ],
        needsProfessionalHelp: true,
      }
    } else if (score <= 10) {
      return {
        level: "Moderate Harmony",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        description:
          "Some challenges exist. Try self-help activities like family meetings and reassess in 2 weeks. If unchanged, consider therapy.",
        recommendations: [
          "Hold weekly family meetings to improve communication",
          "Create a family charter with shared values and goals",
          "Practice family bonding activities together",
          "Establish fair chore and responsibility systems",
          "Work on listening skills and empathy within the family",
        ],
        needsProfessionalHelp: false,
      }
    } else {
      return {
        level: "High Harmony",
        color: "text-green-600",
        bgColor: "bg-green-50",
        description: "Strong family dynamics! Maintain with regular check-ins or self-help resources.",
        recommendations: [
          "Continue your positive family practices",
          "Regular family check-ins to maintain connection",
          "Celebrate family achievements and milestones",
          "Model healthy communication for other families",
          "Consider volunteering together as a family",
        ],
        needsProfessionalHelp: false,
      }
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    const score = calculateScore()
    const analysis = getResultAnalysis(score)

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="h-5 w-5 text-gray-600 mr-2" />
                  <Users className="h-8 w-8 text-green-600 mr-2" />
                  <h1 className="text-2xl font-bold text-green-600">MOOD ANALYZER</h1>
                </Link>
              </div>
              <div className="text-sm text-gray-600">Family Assessment Results</div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto py-12 px-4">
          <Card className={`${analysis.bgColor} border-2`}>
            <CardHeader>
              <CardTitle className={`text-2xl ${analysis.color}`}>Family Dynamics Check Results</CardTitle>
              <CardDescription className="text-lg">
                Your total score: {score}/15 - {analysis.level}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-green-600 h-3 rounded-full transition-all duration-1000"
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
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {analysis.needsProfessionalHelp && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Family Therapy Recommended</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Based on your responses, family therapy could help improve your family dynamics.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/professionals?type=family">Find a Family Therapist</Link>
                  </Button>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/assessment/family">Retake Assessment</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/self-help?type=family">Family Resources</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> This assessment is not a substitute for professional family counseling. Please
            consult a qualified therapist for comprehensive family support.
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="h-5 w-5 text-gray-600 mr-2" />
                <Users className="h-8 w-8 text-green-600 mr-2" />
                <h1 className="text-2xl font-bold text-green-600">MOOD ANALYZER</h1>
              </Link>
            </div>
            <div className="text-sm text-gray-600">Family Assessment</div>
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
            <CardDescription>Based on your family interactions over the last month</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[questions[currentQuestion].id]?.toString() || ""}
              onValueChange={(value) => handleAnswer(questions[currentQuestion].id, Number.parseInt(value))}
            >
              {(questions[currentQuestion].reverse ? reverseOptions : options).map((option) => (
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
                className="bg-green-600 hover:bg-green-700"
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
