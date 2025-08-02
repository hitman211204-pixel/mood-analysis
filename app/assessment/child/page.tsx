"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Baby, ArrowLeft } from "lucide-react"

const questions = [
  {
    id: 1,
    text: "Does the child seem happy or enjoy activities?",
    category: "mood",
  },
  {
    id: 2,
    text: "Does the child have trouble sleeping or seem tired?",
    category: "sleep",
    reverse: true,
  },
  {
    id: 3,
    text: "Does the child get upset or angry easily?",
    category: "behavior",
    reverse: true,
  },
  {
    id: 4,
    text: "Does the child interact well with friends or family?",
    category: "social",
  },
  {
    id: 5,
    text: "Does the child seem worried or anxious about things?",
    category: "anxiety",
    reverse: true,
  },
]

const options = [
  { value: "0", label: "Never", score: 0 },
  { value: "1", label: "Rarely", score: 1 },
  { value: "2", label: "Sometimes", score: 2 },
  { value: "3", label: "Often", score: 3 },
]

const reverseOptions = [
  { value: "0", label: "Always", score: 0 },
  { value: "1", label: "Often", score: 1 },
  { value: "2", label: "Sometimes", score: 2 },
  { value: "3", label: "Rarely", score: 3 },
]

export default function ChildAssessmentPage() {
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
        level: "Significant Concerns",
        color: "text-red-600",
        bgColor: "bg-red-50",
        description: "Noticeable mood or behavior issues. We recommend consulting a child therapist.",
        recommendations: [
          "Schedule an appointment with a child psychologist or therapist",
          "Speak with your child's pediatrician",
          "Create a consistent daily routine for your child",
          "Practice patience and provide extra emotional support",
          "Consider family therapy if family dynamics are involved",
        ],
        needsProfessionalHelp: true,
      }
    } else if (score <= 10) {
      return {
        level: "Moderate Concerns",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        description:
          "Some challenges present. Try self-help strategies like a consistent routine and reassess in 2 weeks. If unchanged, seek therapy.",
        recommendations: [
          "Establish consistent bedtime and daily routines",
          "Increase one-on-one quality time with your child",
          "Practice positive reinforcement and praise",
          "Monitor screen time and ensure physical activity",
          "Consider talking to school counselors or teachers",
        ],
        needsProfessionalHelp: false,
      }
    } else {
      return {
        level: "Good Adjustment",
        color: "text-green-600",
        bgColor: "bg-green-50",
        description: "Positive mood and behavior! Maintain with supportive activities or check-ins.",
        recommendations: [
          "Continue your current positive parenting practices",
          "Maintain regular family activities and bonding time",
          "Encourage your child's interests and hobbies",
          "Keep open communication with your child",
          "Regular check-ins to maintain this positive state",
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="h-5 w-5 text-gray-600 mr-2" />
                  <Baby className="h-8 w-8 text-blue-600 mr-2" />
                  <h1 className="text-2xl font-bold text-blue-600">MOOD ANALYZER</h1>
                </Link>
              </div>
              <div className="text-sm text-gray-600">Child Assessment Results</div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto py-12 px-4">
          <Card className={`${analysis.bgColor} border-2`}>
            <CardHeader>
              <CardTitle className={`text-2xl ${analysis.color}`}>Child Mood & Behavior Check Results</CardTitle>
              <CardDescription className="text-lg">
                Your total score: {score}/15 - {analysis.level}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
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
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {analysis.needsProfessionalHelp && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Child Therapy Recommended</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Based on your responses, consulting with a child therapist could be beneficial for your child's
                    well-being.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/professionals?type=child">Find a Child Therapist</Link>
                  </Button>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/assessment/child">Retake Assessment</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/self-help?type=child">Parenting Resources</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> This assessment is not a substitute for professional medical advice. Please
            consult a qualified child psychologist or pediatrician for proper evaluation and treatment.
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="h-5 w-5 text-gray-600 mr-2" />
                <Baby className="h-8 w-8 text-blue-600 mr-2" />
                <h1 className="text-2xl font-bold text-blue-600">MOOD ANALYZER</h1>
              </Link>
            </div>
            <div className="text-sm text-gray-600">Child Assessment</div>
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
            <CardDescription>
              For parents: Answer based on your child's behavior over the last month (ages 6-12)
            </CardDescription>
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
                className="bg-blue-600 hover:bg-blue-700"
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
