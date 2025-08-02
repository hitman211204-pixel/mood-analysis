"use server"

import { revalidatePath } from "next/cache"

export async function saveAssessment(type: string, score: number, maxScore: number, results: any, answers: any) {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (
      !supabaseUrl ||
      !supabaseAnonKey ||
      supabaseUrl === "undefined" ||
      supabaseAnonKey === "undefined" ||
      supabaseUrl.trim() === "" ||
      supabaseAnonKey.trim() === ""
    ) {
      // Return mock data for demo mode
      return {
        id: "demo-" + Date.now(),
        user_id: "demo-user",
        type,
        score,
        max_score: maxScore,
        results,
        answers,
        created_at: new Date().toISOString(),
      }
    }

    const { createClient } = await import("@/lib/supabase/server")
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const { data, error } = await supabase
      .from("assessments")
      .insert({
        user_id: user.id,
        type,
        score,
        max_score: maxScore,
        results,
        answers,
      })
      .select()
      .single()

    if (error) {
      if (error.message === "Supabase not configured") {
        // Return mock data for demo mode
        return {
          id: "demo-" + Date.now(),
          user_id: user.id,
          type,
          score,
          max_score: maxScore,
          results,
          answers,
          created_at: new Date().toISOString(),
        }
      }
      throw new Error(`Failed to save assessment: ${error.message}`)
    }

    revalidatePath("/dashboard")
    return data
  } catch (error) {
    console.error("Save assessment error:", error)
    throw error
  }
}

export async function saveMoodEntry(moodScore: number, emotions: string[], notes?: string, date?: string) {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (
      !supabaseUrl ||
      !supabaseAnonKey ||
      supabaseUrl === "undefined" ||
      supabaseAnonKey === "undefined" ||
      supabaseUrl.trim() === "" ||
      supabaseAnonKey.trim() === ""
    ) {
      // Return mock data for demo mode
      return {
        id: "demo-" + Date.now(),
        user_id: "demo-user",
        mood_score: moodScore,
        emotions,
        notes,
        date: date || new Date().toISOString().split("T")[0],
        created_at: new Date().toISOString(),
      }
    }

    const { createClient } = await import("@/lib/supabase/server")
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const { data, error } = await supabase
      .from("mood_entries")
      .upsert({
        user_id: user.id,
        mood_score: moodScore,
        emotions,
        notes,
        date: date || new Date().toISOString().split("T")[0],
      })
      .select()
      .single()

    if (error) {
      if (error.message === "Supabase not configured") {
        // Return mock data for demo mode
        return {
          id: "demo-" + Date.now(),
          user_id: user.id,
          mood_score: moodScore,
          emotions,
          notes,
          date: date || new Date().toISOString().split("T")[0],
          created_at: new Date().toISOString(),
        }
      }
      throw new Error(`Failed to save mood entry: ${error.message}`)
    }

    revalidatePath("/dashboard")
    return data
  } catch (error) {
    console.error("Save mood entry error:", error)
    throw error
  }
}

export async function bookAppointment(therapistId: string, appointmentDate: string, notes?: string) {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (
      !supabaseUrl ||
      !supabaseAnonKey ||
      supabaseUrl === "undefined" ||
      supabaseAnonKey === "undefined" ||
      supabaseUrl.trim() === "" ||
      supabaseAnonKey.trim() === ""
    ) {
      // Return mock data for demo mode
      return {
        id: "demo-" + Date.now(),
        user_id: "demo-user",
        therapist_id: therapistId,
        appointment_date: appointmentDate,
        notes,
        status: "pending",
        created_at: new Date().toISOString(),
      }
    }

    const { createClient } = await import("@/lib/supabase/server")
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      throw new Error("User not authenticated")
    }

    const { data, error } = await supabase
      .from("appointments")
      .insert({
        user_id: user.id,
        therapist_id: therapistId,
        appointment_date: appointmentDate,
        notes,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      if (error.message === "Supabase not configured") {
        // Return mock data for demo mode
        return {
          id: "demo-" + Date.now(),
          user_id: user.id,
          therapist_id: therapistId,
          appointment_date: appointmentDate,
          notes,
          status: "pending",
          created_at: new Date().toISOString(),
        }
      }
      throw new Error(`Failed to book appointment: ${error.message}`)
    }

    revalidatePath("/dashboard")
    return data
  } catch (error) {
    console.error("Book appointment error:", error)
    throw error
  }
}

export async function submitFeedback(assessmentId: string | null, rating: string, comments?: string) {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (
      !supabaseUrl ||
      !supabaseAnonKey ||
      supabaseUrl === "undefined" ||
      supabaseAnonKey === "undefined" ||
      supabaseUrl.trim() === "" ||
      supabaseAnonKey.trim() === ""
    ) {
      // Return mock data for demo mode
      return {
        id: "demo-" + Date.now(),
        user_id: "demo-user",
        assessment_id: assessmentId,
        rating,
        comments,
        created_at: new Date().toISOString(),
      }
    }

    const { createClient } = await import("@/lib/supabase/server")
    const supabase = await createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    const { data, error } = await supabase
      .from("feedback")
      .insert({
        user_id: user?.id || null,
        assessment_id: assessmentId,
        rating,
        comments,
      })
      .select()
      .single()

    if (error) {
      if (error.message === "Supabase not configured") {
        // Return mock data for demo mode
        return {
          id: "demo-" + Date.now(),
          user_id: user?.id || null,
          assessment_id: assessmentId,
          rating,
          comments,
          created_at: new Date().toISOString(),
        }
      }
      throw new Error(`Failed to submit feedback: ${error.message}`)
    }

    return data
  } catch (error) {
    console.error("Submit feedback error:", error)
    throw error
  }
}
