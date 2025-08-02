import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowLeft, MapPin, Clock, Star, Phone, Mail } from "lucide-react"

const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Individual Therapy",
    specialties: ["Anxiety", "Depression", "Trauma"],
    experience: "15 years",
    rating: 4.9,
    location: "New York, NY",
    availability: "Available this week",
    image: "/placeholder.svg?height=100&width=100",
    description: "Specializing in cognitive behavioral therapy and mindfulness-based interventions.",
    phone: "(555) 123-4567",
    email: "sarah.johnson@therapy.com",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Couples Therapy",
    specialties: ["Relationship Issues", "Communication", "Conflict Resolution"],
    experience: "12 years",
    rating: 4.8,
    location: "Los Angeles, CA",
    availability: "Available next week",
    image: "/placeholder.svg?height=100&width=100",
    description: "Expert in Gottman Method couples therapy and emotionally focused therapy.",
    phone: "(555) 234-5678",
    email: "michael.chen@therapy.com",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Family Therapy",
    specialties: ["Family Dynamics", "Parenting", "Adolescent Issues"],
    experience: "18 years",
    rating: 4.9,
    location: "Chicago, IL",
    availability: "Available this week",
    image: "/placeholder.svg?height=100&width=100",
    description: "Specializing in systemic family therapy and multi-generational approaches.",
    phone: "(555) 345-6789",
    email: "emily.rodriguez@therapy.com",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Child Therapy",
    specialties: ["Child Psychology", "ADHD", "Behavioral Issues"],
    experience: "10 years",
    rating: 4.7,
    location: "Houston, TX",
    availability: "Available in 2 weeks",
    image: "/placeholder.svg?height=100&width=100",
    description: "Specialized in play therapy and cognitive behavioral therapy for children.",
    phone: "(555) 456-7890",
    email: "james.wilson@therapy.com",
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Individual Therapy",
    specialties: ["Stress Management", "Life Transitions", "Self-Esteem"],
    experience: "8 years",
    rating: 4.6,
    location: "Phoenix, AZ",
    availability: "Available this week",
    image: "/placeholder.svg?height=100&width=100",
    description: "Focuses on solution-focused therapy and positive psychology approaches.",
    phone: "(555) 567-8901",
    email: "lisa.thompson@therapy.com",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Couples Therapy",
    specialties: ["Marriage Counseling", "Intimacy Issues", "Divorce Mediation"],
    experience: "20 years",
    rating: 4.9,
    location: "Seattle, WA",
    availability: "Available next week",
    image: "/placeholder.svg?height=100&width=100",
    description: "Experienced in Imago relationship therapy and attachment-based approaches.",
    phone: "(555) 678-9012",
    email: "robert.kim@therapy.com",
  },
]

export default function ProfessionalsPage() {
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
            <div className="text-sm text-gray-600">Find Professional Help</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect with Licensed Mental Health Professionals</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our network of qualified therapists and counselors are here to provide professional support for your mental
            health journey. All professionals are licensed and experienced in their specialties.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <Button variant="outline" className="bg-white">
            All Specialties
          </Button>
          <Button variant="outline" className="bg-white">
            Individual Therapy
          </Button>
          <Button variant="outline" className="bg-white">
            Couples Therapy
          </Button>
          <Button variant="outline" className="bg-white">
            Family Therapy
          </Button>
          <Button variant="outline" className="bg-white">
            Child Therapy
          </Button>
        </div>

        {/* Therapists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {therapists.map((therapist) => (
            <Card key={therapist.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={therapist.image || "/placeholder.svg"}
                    alt={therapist.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{therapist.name}</CardTitle>
                    <CardDescription className="text-purple-600 font-medium">{therapist.specialty}</CardDescription>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{therapist.rating}</span>
                      <span className="text-sm text-gray-400 ml-2">({therapist.experience})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{therapist.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {therapist.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {therapist.availability}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {therapist.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {therapist.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {therapist.email}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Book Appointment
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Crisis Resources */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center">
              <Phone className="h-6 w-6 mr-2" />
              Crisis Resources - Immediate Help Available
            </CardTitle>
            <CardDescription className="text-red-700">
              If you're experiencing a mental health emergency, please reach out immediately:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Suicide Prevention</h4>
                <p className="text-red-700 mb-2">National Suicide Prevention Lifeline</p>
                <p className="font-bold text-red-800">988</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Crisis Text Line</h4>
                <p className="text-red-700 mb-2">Text HOME to</p>
                <p className="font-bold text-red-800">741741</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Emergency</h4>
                <p className="text-red-700 mb-2">Call emergency services</p>
                <p className="font-bold text-red-800">911</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insurance & Payment Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Insurance & Payment Information</CardTitle>
            <CardDescription>
              Most of our therapists accept major insurance plans and offer flexible payment options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Accepted Insurance Plans:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Blue Cross Blue Shield</li>
                  <li>• Aetna</li>
                  <li>• Cigna</li>
                  <li>• UnitedHealthcare</li>
                  <li>• Kaiser Permanente</li>
                  <li>• And many more...</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Options:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Insurance co-pays</li>
                  <li>• Self-pay rates available</li>
                  <li>• Sliding scale fees</li>
                  <li>• HSA/FSA accepted</li>
                  <li>• Payment plans available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Assessment */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to take another assessment or explore self-help resources?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/self-help">Self-Help Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
