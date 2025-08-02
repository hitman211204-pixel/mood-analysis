import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowLeft, BookOpen, Headphones, Video, Heart, Smartphone } from "lucide-react"

const selfHelpResources = [
  {
    category: "Mindfulness & Meditation",
    icon: <Brain className="h-8 w-8 text-purple-600" />,
    resources: [
      {
        title: "Guided Breathing Exercises",
        description: "5-minute daily breathing exercises to reduce anxiety and stress",
        type: "Audio",
        duration: "5-15 min",
        link: "#",
      },
      {
        title: "Body Scan Meditation",
        description: "Progressive relaxation technique for better sleep and stress relief",
        type: "Audio",
        duration: "20 min",
        link: "#",
      },
      {
        title: "Mindful Walking Guide",
        description: "Learn to practice mindfulness during daily walks",
        type: "Article",
        duration: "10 min read",
        link: "#",
      },
    ],
  },
  {
    category: "Cognitive Behavioral Techniques",
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    resources: [
      {
        title: "Thought Record Worksheet",
        description: "Track and challenge negative thought patterns",
        type: "Worksheet",
        duration: "15 min",
        link: "#",
      },
      {
        title: "Mood Tracking Journal",
        description: "Daily mood tracking with triggers and patterns identification",
        type: "Tool",
        duration: "5 min daily",
        link: "#",
      },
      {
        title: "Cognitive Distortions Guide",
        description: "Identify and overcome common thinking traps",
        type: "Article",
        duration: "15 min read",
        link: "#",
      },
    ],
  },
  {
    category: "Stress Management",
    icon: <Heart className="h-8 w-8 text-red-600" />,
    resources: [
      {
        title: "Progressive Muscle Relaxation",
        description: "Step-by-step muscle relaxation technique",
        type: "Video",
        duration: "15 min",
        link: "#",
      },
      {
        title: "Stress Management Toolkit",
        description: "Comprehensive guide to managing daily stress",
        type: "PDF Guide",
        duration: "30 min read",
        link: "#",
      },
      {
        title: "Quick Stress Relief Techniques",
        description: "5 techniques you can use anywhere, anytime",
        type: "Article",
        duration: "8 min read",
        link: "#",
      },
    ],
  },
  {
    category: "Sleep & Wellness",
    icon: <Smartphone className="h-8 w-8 text-green-600" />,
    resources: [
      {
        title: "Sleep Hygiene Checklist",
        description: "Improve your sleep quality with proven techniques",
        type: "Checklist",
        duration: "10 min",
        link: "#",
      },
      {
        title: "Bedtime Relaxation Routine",
        description: "Guided routine to prepare your mind and body for sleep",
        type: "Audio",
        duration: "20 min",
        link: "#",
      },
      {
        title: "Nutrition for Mental Health",
        description: "How diet affects mood and mental well-being",
        type: "Article",
        duration: "12 min read",
        link: "#",
      },
    ],
  },
]

const recommendedApps = [
  {
    name: "Headspace",
    description: "Meditation and mindfulness app with guided sessions",
    category: "Meditation",
    rating: 4.8,
  },
  {
    name: "Calm",
    description: "Sleep stories, meditation, and relaxation techniques",
    category: "Sleep & Relaxation",
    rating: 4.7,
  },
  {
    name: "Daylio",
    description: "Mood tracking and journaling app",
    category: "Mood Tracking",
    rating: 4.6,
  },
  {
    name: "Sanvello",
    description: "Anxiety and depression support with CBT techniques",
    category: "Mental Health",
    rating: 4.5,
  },
]

export default function SelfHelpPage() {
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
            <div className="text-sm text-gray-600">Self-Help Resources</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Help Resources & Tools</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of evidence-based self-help resources, tools, and techniques to support your mental
            health journey. These resources complement professional treatment but are not a substitute for professional
            care.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {selfHelpResources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-3">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <div className="flex items-center space-x-2">
                          {resource.type === "Audio" && <Headphones className="h-4 w-4 text-purple-600" />}
                          {resource.type === "Video" && <Video className="h-4 w-4 text-red-600" />}
                          {resource.type === "Article" && <BookOpen className="h-4 w-4 text-blue-600" />}
                          {resource.type === "Worksheet" && <BookOpen className="h-4 w-4 text-green-600" />}
                          {resource.type === "Tool" && <Smartphone className="h-4 w-4 text-orange-600" />}
                          {resource.type === "PDF Guide" && <BookOpen className="h-4 w-4 text-indigo-600" />}
                          {resource.type === "Checklist" && <BookOpen className="h-4 w-4 text-teal-600" />}
                        </div>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{resource.duration}</span>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          Access Resource
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Apps */}
        <div className="mt-16">
          <div className="flex items-center mb-6">
            <Smartphone className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900 ml-3">Recommended Mental Health Apps</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedApps.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{app.name}</CardTitle>
                  <CardDescription className="text-sm text-purple-600">{app.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{app.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">★ {app.rating}</span>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Resources */}
        <Card className="mt-16 bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800">When to Seek Professional Help</CardTitle>
            <CardDescription className="text-red-700">
              Self-help resources are valuable, but professional support may be needed if you experience:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Warning Signs:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Persistent thoughts of self-harm or suicide</li>
                  <li>• Inability to function in daily activities</li>
                  <li>• Severe anxiety or panic attacks</li>
                  <li>• Substance abuse as coping mechanism</li>
                  <li>• Symptoms lasting more than 2 weeks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Get Help Now:</h4>
                <div className="space-y-2">
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link href="/professionals">Find a Therapist</Link>
                  </Button>
                  <Button variant="outline" className="w-full border-red-300 text-red-700 bg-transparent" asChild>
                    <Link href="/crisis-resources">Crisis Resources</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to take an assessment or connect with professionals?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Take Assessment</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/professionals">Find Professional Help</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://stirring-chimera-f878f3.netlify.app/" target="_blank">
                Daily Mood Tracker
              </Link>
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-gray-100 rounded-lg text-sm text-gray-600 text-center">
          <strong>Important Disclaimer:</strong> These self-help resources are for educational purposes only and are not
          a substitute for professional mental health treatment. If you're experiencing severe symptoms or crisis
          situations, please seek immediate professional help or contact emergency services.
        </div>
      </div>
    </div>
  )
}
