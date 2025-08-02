import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Brain, Heart, Users, Target, Award, Shield, CheckCircle } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Clinical Director",
    credentials: "PhD in Clinical Psychology",
    image: "/placeholder.svg?height=150&width=150",
    description: "15+ years experience in mental health assessment and treatment",
  },
  {
    name: "Dr. Michael Chen",
    role: "Research Director",
    credentials: "PhD in Psychology, MS in Data Science",
    image: "/placeholder.svg?height=150&width=150",
    description: "Expert in psychometric assessment and digital mental health",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Family Therapy Specialist",
    credentials: "PhD in Family Psychology",
    image: "/placeholder.svg?height=150&width=150",
    description: "Specialist in family dynamics and systemic therapy approaches",
  },
]

const values = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Evidence-Based",
    description: "All our assessments are built on validated clinical research and proven methodologies.",
  },
  {
    icon: <Heart className="h-8 w-8 text-red-600" />,
    title: "Compassionate Care",
    description: "We approach mental health with empathy, understanding, and without judgment.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "Accessible",
    description: "Making mental health resources available to everyone, regardless of background or location.",
  },
  {
    icon: <Target className="h-8 w-8 text-purple-600" />,
    title: "Personalized",
    description: "Tailored recommendations and resources based on individual assessment results.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Header />

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Mood Analyzer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to making mental health assessment and support accessible to everyone. Our platform combines
            clinical expertise with technology to provide comprehensive, evidence-based mental health evaluations.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <CardTitle className="text-3xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              To democratize access to mental health assessment and support by providing scientifically-backed,
              user-friendly tools that help individuals, couples, families, and children understand their mental
              well-being and connect with appropriate resources and professional help when needed.
            </p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl text-center">What We Offer</CardTitle>
            <CardDescription className="text-center text-lg">
              Comprehensive mental health assessment tools for different needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Assessment Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Individual Assessments:</strong> PHQ-9 and GAD-7 based evaluations for anxiety and
                      depression
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Couples Assessments:</strong> Relationship health and communication evaluation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Family Assessments:</strong> Family dynamics and support system analysis
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Child Assessments:</strong> Parent-reported behavioral and emotional evaluations
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Professional Network:</strong> Connect with licensed therapists and counselors
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Self-Help Resources:</strong> Evidence-based tools and techniques
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Mood Tracking:</strong> Daily mood monitoring and pattern recognition
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Crisis Resources:</strong> Immediate help and emergency contact information
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">{member.role}</CardDescription>
                  <p className="text-sm text-gray-500">{member.credentials}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scientific Approach */}
        <Card className="mb-16 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-blue-800">Our Scientific Approach</CardTitle>
            <CardDescription className="text-center text-blue-700 text-lg">
              Evidence-based assessments built on validated clinical research
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Clinical Foundations</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Based on DSM-5 criteria and clinical guidelines</li>
                  <li>• Uses validated instruments like PHQ-9 and GAD-7</li>
                  <li>• Regular updates based on latest research</li>
                  <li>• Peer-reviewed methodology</li>
                  <li>• Transparent scoring algorithms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Quality Assurance</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Clinical oversight by licensed professionals</li>
                  <li>• Regular validation studies</li>
                  <li>• User feedback integration</li>
                  <li>• Continuous improvement process</li>
                  <li>• Ethical guidelines compliance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Privacy & Security</CardTitle>
            <CardDescription className="text-center text-lg">
              Your mental health information is protected with the highest security standards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Data Encryption</h4>
                <p className="text-sm text-gray-600">
                  All data is encrypted in transit and at rest using industry-standard protocols
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">HIPAA Compliant</h4>
                <p className="text-sm text-gray-600">We follow HIPAA guidelines for protecting health information</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">No Data Sharing</h4>
                <p className="text-sm text-gray-600">Your personal information is never shared with third parties</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of users who have taken control of their mental health with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/mood-test">Take Your First Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-center">Get in Touch</CardTitle>
            <CardDescription className="text-center">
              Have questions about our platform or need support?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">General Inquiries</h4>
                <p className="text-gray-600">info@moodanalyzer.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Clinical Questions</h4>
                <p className="text-gray-600">clinical@moodanalyzer.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Support</h4>
                <p className="text-gray-600">support@moodanalyzer.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
