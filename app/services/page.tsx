import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Brain, Heart, Users, Baby, CheckCircle, Clock, Shield, Award } from "lucide-react"

const services = [
  {
    title: "Individual Mental Health Assessment",
    description:
      "Comprehensive evaluation of anxiety, depression, and stress levels using evidence-based questionnaires.",
    icon: <Brain className="h-12 w-12 text-purple-600" />,
    features: [
      "PHQ-9 and GAD-7 based assessment",
      "Personalized recommendations",
      "Professional referrals when needed",
      "Progress tracking over time",
    ],
    duration: "5-10 minutes",
    link: "/assessment/individual",
  },
  {
    title: "Couples Relationship Assessment",
    description: "Evaluate communication patterns, trust levels, and conflict resolution skills in your relationship.",
    icon: <Heart className="h-12 w-12 text-pink-600" />,
    features: [
      "Communication effectiveness analysis",
      "Trust and intimacy evaluation",
      "Conflict resolution assessment",
      "Relationship improvement strategies",
    ],
    duration: "8-12 minutes",
    link: "/assessment/couples",
  },
  {
    title: "Family Dynamics Evaluation",
    description: "Assess family roles, support systems, and communication patterns within your family unit.",
    icon: <Users className="h-12 w-12 text-green-600" />,
    features: [
      "Family role assessment",
      "Support system evaluation",
      "Communication pattern analysis",
      "Family therapy recommendations",
    ],
    duration: "10-15 minutes",
    link: "/assessment/family",
  },
  {
    title: "Child Behavioral Assessment",
    description: "Parent-reported evaluation of children's emotional well-being and behavioral patterns.",
    icon: <Baby className="h-12 w-12 text-blue-600" />,
    features: [
      "Mood and behavior tracking",
      "Social interaction assessment",
      "Sleep and anxiety evaluation",
      "Child therapy referrals",
    ],
    duration: "6-10 minutes",
    link: "/assessment/child",
  },
]

const additionalServices = [
  {
    title: "Professional Therapist Network",
    description: "Connect with licensed mental health professionals in your area",
    icon: <Award className="h-8 w-8 text-purple-600" />,
    link: "/professionals",
  },
  {
    title: "Self-Help Resources",
    description: "Access evidence-based tools and techniques for mental wellness",
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    link: "/self-help",
  },
  {
    title: "Daily Mood Tracking",
    description: "Track your mood patterns and triggers over time",
    icon: <Clock className="h-8 w-8 text-green-600" />,
    link: "https://stirring-chimera-f878f3.netlify.app/",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Header />

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mental Health Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health assessments and resources designed to support your well-being journey. All our
            services are based on evidence-based practices and clinical research.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  {service.icon}
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Duration: {service.duration}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href={service.link}>Start Assessment</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" asChild>
                <Link href={service.link} target={service.link.startsWith("http") ? "_blank" : undefined}>
                  <CardHeader className="text-center">
                    {service.icon}
                    <CardTitle className="text-lg mt-4">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      {service.link.startsWith("http") ? "Visit External Tool" : "Learn More"}
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">How Our Assessments Work</CardTitle>
            <CardDescription className="text-center text-lg">
              Our scientifically-backed approach to mental health evaluation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">Choose Assessment</h4>
                <p className="text-sm text-gray-600">Select the type of assessment that best fits your needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">Answer Questions</h4>
                <p className="text-sm text-gray-600">Complete evidence-based questionnaires at your own pace</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">Get Results</h4>
                <p className="text-sm text-gray-600">Receive detailed analysis and personalized recommendations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-purple-600">4</span>
                </div>
                <h4 className="font-semibold mb-2">Take Action</h4>
                <p className="text-sm text-gray-600">Follow recommendations or connect with professionals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scientific Backing */}
        <Card className="mb-16 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">Evidence-Based Approach</CardTitle>
            <CardDescription className="text-blue-700">
              Our assessments are built on validated clinical instruments and research
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Clinical Instruments Used:</h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• PHQ-9 (Patient Health Questionnaire-9)</li>
                  <li>• GAD-7 (Generalized Anxiety Disorder-7)</li>
                  <li>• Relationship Assessment Scale</li>
                  <li>• Family Assessment Device</li>
                  <li>• Child Behavior Checklist (adapted)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Quality Assurance:</h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• Validated scoring algorithms</li>
                  <li>• Regular updates based on research</li>
                  <li>• Professional oversight</li>
                  <li>• Transparent methodology</li>
                  <li>• Continuous improvement process</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Mental Health Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step towards better mental health with our comprehensive assessments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/mood-test">Start Quick Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/assessment/individual">Full Individual Assessment</Link>
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-gray-100 rounded-lg text-center">
          <h4 className="font-semibold text-gray-800 mb-2">Important Disclaimer</h4>
          <p className="text-sm text-gray-600">
            Our assessments are screening tools and educational resources, not diagnostic instruments. They are not a
            substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified
            health providers with any questions you may have regarding a medical condition.
          </p>
        </div>
      </div>
    </div>
  )
}
