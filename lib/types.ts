// Common types for the application

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "instructor" | "participant"
  createdAt: Date
}

export interface Programme {
  id: string
  name: string
  description: string
  startDate: Date
  endDate: Date
  instructors: User[]
  participants: User[]
  sessions: Session[]
  status: "draft" | "active" | "completed"
  createdAt: Date
}

export interface Session {
  id: string
  programmeId: string
  title: string
  description: string
  startTime: Date
  endTime: Date
  instructor: User
  participants: User[]
  recordingUrl?: string
  status: "scheduled" | "in-progress" | "completed"
  createdAt: Date
}

export interface Recording {
  id: string
  sessionId: string
  title: string
  url: string
  duration: number
  uploadedAt: Date
  size: number
}

export interface Message {
  id: string
  sender: User
  recipient: User
  content: string
  createdAt: Date
  read: boolean
}

export interface Note {
  id: string
  programmeId: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}
