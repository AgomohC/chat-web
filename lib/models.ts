export type Conversation = {
  id: number
  name: string
  isGroup: boolean
  type: string
  createdAt: string
  updatedAt: string
  messages: Message[]
  participants: ConversationParticipant[]
  unreadMessageCount: number
  isPinned: boolean
  avatar: string
  isMuted: boolean
}

export type Message = {
  id: number
  conversationId: number
  text: string
  media?: Media
  timestamp: string
  createdAt: string
  updatedAt: string
  isDeleted: boolean
}

export type ConversationParticipant = {
  id: number
  userId: number
  conversationId: number
  isOwner: boolean
  isMember: boolean
}

export type mediaType = "image" | "video" | "document" | "audio" | "other"
export type Media = {
  id: number
  mediaType: mediaType
  filename: string
  fileSize: number
  content: string | null
  createdAt: string
  updatedAt: string
  messageId?: string
  message?: Message
}

export type Folder = {
  id: number
  name: string
  conversationsWithUnreadMessagesCount: number
  slug: string
}
