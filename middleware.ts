import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Check if Supabase is configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase is not configured, allow all requests to pass through
  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl === "undefined" ||
    supabaseAnonKey === "undefined" ||
    supabaseUrl.trim() === "" ||
    supabaseAnonKey.trim() === ""
  ) {
    // In demo mode, don't protect any routes and don't try to use Supabase
    return NextResponse.next()
  }

  // Only import and use Supabase if properly configured
  try {
    // Dynamic import to prevent loading when not configured
    const { createServerClient } = await import("@supabase/ssr")

    let supabaseResponse = NextResponse.next({
      request,
    })

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    })

    // Only check auth for protected routes when Supabase is configured
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        // no user, redirect to home page
        const url = request.nextUrl.clone()
        url.pathname = "/"
        return NextResponse.redirect(url)
      }
    }

    return supabaseResponse
  } catch (error) {
    console.error("Middleware error:", error)
    // If there's any error with Supabase, allow the request to continue
    // This ensures the app doesn't break if Supabase is misconfigured
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
