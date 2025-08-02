import { cookies } from "next/headers"

export async function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Check for undefined, empty, or literal 'undefined' strings
  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl === "undefined" ||
    supabaseAnonKey === "undefined" ||
    supabaseUrl.trim() === "" ||
    supabaseAnonKey.trim() === ""
  ) {
    // Return a mock client that provides the expected interface
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        exchangeCodeForSession: () =>
          Promise.resolve({
            data: { user: null, session: null },
            error: { message: "Supabase not configured" },
          }),
      },
      from: (table: string) => ({
        select: (columns?: string) => ({
          eq: (column: string, value: any) => ({
            order: (column: string, options?: any) =>
              Promise.resolve({
                data: [],
                error: { message: "Supabase not configured" },
              }),
          }),
        }),
        insert: (values: any) => ({
          select: (columns?: string) => ({
            single: () =>
              Promise.resolve({
                data: null,
                error: { message: "Supabase not configured" },
              }),
          }),
        }),
        upsert: (values: any) => ({
          select: (columns?: string) => ({
            single: () =>
              Promise.resolve({
                data: null,
                error: { message: "Supabase not configured" },
              }),
          }),
        }),
      }),
    } as any
  }

  // Only import createServerClient when Supabase is properly configured
  const { createServerClient } = await import("@supabase/ssr")
  const cookieStore = await cookies()

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
