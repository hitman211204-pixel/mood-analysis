"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowLeft, Calendar } from "lucide-react"

const timeFrames = [
  { id: "1week", label: "Last Week", description: "How have you been feeling in the past 7 days?" },
  { id: "2weeks", label: "Last 2 Weeks", description: "How have you been feeling in the past 14 days?" },
  { id: "4weeks", label: "Last 4 Weeks", description: "How have you been feeling in the past month?" },
  { id: "3months", label: "Last 3 Months", description: "How have you been feeling in the past 3 months?" },
]

const moodEmojis = [
  { emoji: "😊", label: "Very Happy", value: 5, description: "Feeling great and positive" },
  { emoji: "🙂", label: "Happy", value: 4, description: "Generally good mood" },
  { emoji: "😐", label: "Neutral", value: 3, description: "Neither good nor bad" },
  { emoji: "😔", label: "Sad", value: 2, description: "Feeling down or low" },
  { emoji: "😢", label: "Very Sad", value: 1, description: "Feeling very upset or depressed" },
  { emoji: "😰", label: "Anxious", value: 1, description: "Feeling worried or stressed" },
  { emoji: "😡", label: "Angry", value: 1, description: "Feeling frustrated or mad" },
  { emoji: "😴", label: "Tired", value: 2, description: "Feeling exhausted or drained" },
]

export default function MoodTestPage() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("")
  const [selectedMoods, setSelectedMoods] = useState<{ [key: string]: number }>({})
  const [currentStep, setCurrentStep] = useState<"timeframe" | "mood">("timeframe")

  const handleTimeFrameSelect = (timeFrame: string) => {
    setSelectedTimeFrame(timeFrame)
    setCurrentStep("mood")
  }

  const handleMoodSelect = (emoji: string, value: number) => {
    setSelectedMoods((prev) => ({
      ...prev,
      [emoji]: value,
    }))
  }

  const calculateMoodScore = () => {
    const values = Object.values(selectedMoods)
    if (values.length === 0) return 0
    return values.reduce((sum, val) => sum + val, 0) / values.length
  }

  const getMoodAnalysis = (score: number) => {
    if (score >= 4.5) return { level: "Excellent", color: "text-green-600", description: "You're doing great!" }
    if (score >= 3.5) return { level: "Good", color: "text-blue-600", description: "Generally positive mood" }
    if (score >= 2.5) return { level: "Fair", color: "text-yellow-600", description: "Some ups and downs" }
    if (score >= 1.5) return { level: "Concerning", color: "text-orange-600", description: "Consider seeking support" }
    return { level: "Needs Attention", color: "text-red-600", description: "Professional help recommended" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header */}
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
            <div className="text-sm text-gray-600">How's My Mood Tool</div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-12 px-4">
        {currentStep === "timeframe" && (
          <div>
            <div className="text-center mb-12">
              <Calendar className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Time Frame</h2>
              <p className="text-lg text-gray-600">
                Select the period you'd like to reflect on for your mood assessment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {timeFrames.map((timeFrame) => (
                <Card
                  key={timeFrame.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer hover:border-purple-300"
                  onClick={() => handleTimeFrameSelect(timeFrame.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{timeFrame.label}</CardTitle>
                    <CardDescription>{timeFrame.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Select This Period</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentStep === "mood" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Have You Been Feeling?</h2>
              <p className="text-lg text-gray-600 mb-2">
                Select all the emotions that describe your mood during the{" "}
                <span className="font-semibold text-purple-600">
                  {timeFrames.find((tf) => tf.id === selectedTimeFrame)?.label.toLowerCase()}
                </span>
              </p>
              <p className="text-sm text-gray-500">You can select multiple emotions that represent your experience</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {moodEmojis.map((mood) => (
                <Card
                  key={mood.emoji}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedMoods[mood.emoji] ? "ring-2 ring-purple-500 bg-purple-50" : ""
                  }`}
                  onClick={() => handleMoodSelect(mood.emoji, mood.value)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">{mood.emoji}</div>
                    <div className="font-semibold text-sm mb-1">{mood.label}</div>
                    <div className="text-xs text-gray-500">{mood.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {Object.keys(selectedMoods).length > 0 && (
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Your Mood Analysis</h3>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Selected emotions:</div>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(selectedMoods).map((emoji) => (
                      <span key={emoji} className="bg-purple-100 px-3 py-1 rounded-full text-sm">
                        {emoji} {moodEmojis.find((m) => m.emoji === emoji)?.label}
                      </span>
                    ))}
                  </div>
                </div>

                {(() => {
                  const score = calculateMoodScore()
                  const analysis = getMoodAnalysis(score)
                  return (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Overall Mood Score:</span>
                        <span className={`text-lg font-bold ${analysis.color}`}>
                          {score.toFixed(1)}/5.0 - {analysis.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(score / 5) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{analysis.description}</p>
                    </div>
                  )
                })()}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700" asChild>
                    <Link
                      href={`/results?timeframe=${selectedTimeFrame}&score=${calculateMoodScore()}&moods=${Object.keys(selectedMoods).join(",")}`}
                    >
                      Get Detailed Results
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentStep("timeframe")
                      setSelectedMoods({})
                      setSelectedTimeFrame("")
                    }}
                  >
                    Start Over
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
