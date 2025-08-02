import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  // This function should only be called when Supabase is properly configured
  // The calling code should check configuration before calling this
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
