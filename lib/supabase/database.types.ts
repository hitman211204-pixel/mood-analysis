export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      assessments: {
        Row: {
          id: string
          user_id: string
          type: string
          score: number
          max_score: number
          results: Json
          answers: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: string
          score: number
          max_score?: number
          results: Json
          answers: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          score?: number
          max_score?: number
          results?: Json
          answers?: Json
          created_at?: string
          updated_at?: string
        }
      }
      mood_entries: {
        Row: {
          id: string
          user_id: string
          mood_score: number
          emotions: string[]
          notes: string | null
          date: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          mood_score: number
          emotions: string[]
          notes?: string | null
          date?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          mood_score?: number
          emotions?: string[]
          notes?: string | null
          date?: string
          created_at?: string
        }
      }
      therapists: {
        Row: {
          id: string
          name: string
          specialty: string
          specialties: string[]
          experience: string
          rating: number
          location: string
          availability: string
          image_url: string | null
          description: string
          phone: string | null
          email: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          specialty: string
          specialties: string[]
          experience: string
          rating?: number
          location: string
          availability: string
          image_url?: string | null
          description: string
          phone?: string | null
          email?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          specialty?: string
          specialties?: string[]
          experience?: string
          rating?: number
          location?: string
          availability?: string
          image_url?: string | null
          description?: string
          phone?: string | null
          email?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      appointments: {
        Row: {
          id: string
          user_id: string
          therapist_id: string
          appointment_date: string
          status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          therapist_id: string
          appointment_date: string
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          therapist_id?: string
          appointment_date?: string
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      feedback: {
        Row: {
          id: string
          user_id: string | null
          assessment_id: string | null
          rating: string
          comments: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          assessment_id?: string | null
          rating: string
          comments?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          assessment_id?: string | null
          rating?: string
          comments?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
