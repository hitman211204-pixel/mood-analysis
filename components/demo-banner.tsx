"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Info, ExternalLink } from "lucide-react"

export function DemoBanner() {
  // Check if we're using the fallback demo credentials
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const isDemo =
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl === "undefined" ||
    supabaseAnonKey === "undefined" ||
    supabaseUrl.trim() === "" ||
    supabaseAnonKey.trim() === ""

  if (!isDemo) return null

  return (
    <Alert className="mb-4 border-blue-200 bg-blue-50">
      <Info className="h-4 w-4 text-blue-600" />
      <AlertDescription className="text-blue-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span>
            <strong>Demo Mode:</strong> This is a preview version. To enable full functionality including user
            authentication and data persistence, please configure your own Supabase project.
          </span>
          <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 bg-transparent shrink-0" asChild>
            <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer">
              Setup Supabase <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
