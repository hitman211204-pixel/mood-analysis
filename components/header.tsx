"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Menu, X, User, LogOut } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, signOut, loading } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Brain className="h-8 w-8 text-purple-600 mr-2" />
                <h1 className="text-2xl font-bold text-purple-600">MOOD ANALYZER</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                HOME
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">
                SERVICES
              </Link>
              <Link href="/professionals" className="text-gray-700 hover:text-purple-600 transition-colors">
                EXPERTS
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                CONTACT
              </Link>
            </nav>

            {/* Desktop User Menu - Only show if user is logged in */}
            <div className="hidden md:flex items-center space-x-4">
              {loading ? (
                <div className="w-20 h-9 bg-gray-200 animate-pulse rounded"></div>
              ) : user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                      <User className="h-4 w-4" />
                      <span>{user.user_metadata?.full_name || user.email}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/services"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SERVICES
                </Link>
                <Link
                  href="/professionals"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EXPERTS
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>

                {/* Mobile User Menu - Only show if user is logged in */}
                {loading ? (
                  <div className="px-3 py-2">
                    <div className="w-full h-9 bg-gray-200 animate-pulse rounded"></div>
                  </div>
                ) : user ? (
                  <div className="px-3 py-2 space-y-2 border-t">
                    <div className="text-sm text-gray-600">Welcome, {user.user_metadata?.full_name || user.email}</div>
                    <Link
                      href="/dashboard"
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleSignOut}
                      className="w-full text-red-600 border-red-300 hover:bg-red-50 bg-transparent"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
