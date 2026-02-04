import { Conversation, Folder, Message } from "./models"

export const dummyConversations: Conversation[] = [
  {
    id: 1,
    name: "Project Alpha Team",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-15T09:30:00Z",
    updatedAt: "2024-01-26T14:22:00Z",
    unreadMessageCount: 3,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=PAT",
    participants: [
      {
        id: 1,
        userId: 101,
        conversationId: 1,
        isOwner: true,
        isMember: true
      },
      {
        id: 2,
        userId: 102,
        conversationId: 1,
        isOwner: false,
        isMember: true
      },
      {
        id: 3,
        userId: 103,
        conversationId: 1,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 1001,
        conversationId: 1,
        text: "Hey team, let's sync up on the project timeline",
        media: {
          id: 5001,
          mediaType: "document",
          filename: "project_timeline.pdf",
          fileSize: 245760,
          content: null,
          createdAt: "2024-01-26T10:15:00Z",
          updatedAt: "2024-01-26T10:15:00Z",
          messageId: "1001"
        },
        timestamp: "2024-01-26T10:15:00Z",
        createdAt: "2024-01-26T10:15:00Z",
        updatedAt: "2024-01-26T10:15:00Z",
        isDeleted: false
      },
      {
        id: 1002,
        conversationId: 1,
        text: "Sounds good! I've reviewed the initial draft",
        media: {
          id: 5002,
          mediaType: "image",
          filename: "feedback_screenshot.png",
          fileSize: 512000,
          content: "data:image/png;base64,iVBORw0KGgoAAAANS...",
          createdAt: "2024-01-26T11:30:00Z",
          updatedAt: "2024-01-26T11:30:00Z",
          messageId: "1002"
        },
        timestamp: "2024-01-26T11:30:00Z",
        createdAt: "2024-01-26T11:30:00Z",
        updatedAt: "2024-01-26T11:30:00Z",
        isDeleted: false
      },
      {
        id: 1003,
        conversationId: 1,
        text: "Can we schedule a meeting for tomorrow?",
        media: {
          id: 5003,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T14:22:00Z",
          updatedAt: "2024-01-26T14:22:00Z",
          messageId: "1003"
        },
        timestamp: "2024-01-26T14:22:00Z",
        createdAt: "2024-01-26T14:22:00Z",
        updatedAt: "2024-01-26T14:22:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    isGroup: false,
    type: "direct",
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-26T13:45:00Z",
    unreadMessageCount: 0,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=SarahJohnson",
    participants: [
      {
        id: 4,
        userId: 101,
        conversationId: 2,
        isOwner: false,
        isMember: true
      },
      {
        id: 5,
        userId: 104,
        conversationId: 2,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 2001,
        conversationId: 2,
        text: "Did you get a chance to look at the proposal?",
        media: {
          id: 6001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T09:20:00Z",
          updatedAt: "2024-01-26T09:20:00Z",
          messageId: "2001"
        },
        timestamp: "2026-01-26T09:20:00Z",
        createdAt: "2024-01-26T09:20:00Z",
        updatedAt: "2024-01-26T09:20:00Z",
        isDeleted: true
      },
      {
        id: 2002,
        conversationId: 2,
        text: "Yes! Here's my feedback in the recording",
        media: {
          id: 6002,
          mediaType: "audio",
          filename: "voice_note_feedback.m4a",
          fileSize: 1048576,
          content: null,
          createdAt: "2024-01-26T13:45:00Z",
          updatedAt: "2024-01-26T13:45:00Z",
          messageId: "2002"
        },
        timestamp: "2026-01-16T13:45:00Z",
        createdAt: "2024-01-26T13:45:00Z",
        updatedAt: "2024-01-26T13:45:00Z",
        isDeleted: true
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    isMuted: false,
    id: 3,
    name: "Marketing Campaign 2024",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-20T14:00:00Z",
    updatedAt: "2024-01-25T16:30:00Z",
    unreadMessageCount: 12,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MC2024",
    participants: [
      {
        id: 6,
        userId: 105,
        conversationId: 3,
        isOwner: true,
        isMember: true
      },
      {
        id: 7,
        userId: 106,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 8,
        userId: 107,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 9,
        userId: 108,
        conversationId: 3,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 3001,
        conversationId: 3,
        text: "Here's the promotional video draft",
        media: {
          id: 7001,
          mediaType: "video",
          filename: "promo_draft_v1.mp4",
          fileSize: 15728640,
          content: null,
          createdAt: "2024-01-25T16:30:00Z",
          updatedAt: "2024-01-25T16:30:00Z",
          messageId: "3001"
        },
        timestamp: "2024-01-25T16:30:00Z",
        createdAt: "2024-01-25T16:30:00Z",
        updatedAt: "2024-01-25T16:30:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[]
  },
  {
    id: 4,
    name: "Mike Chen",
    isGroup: false,
    type: "direct",
    createdAt: "2023-12-05T10:30:00Z",
    updatedAt: "2024-01-24T11:15:00Z",
    unreadMessageCount: 1,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MikeChen",
    participants: [
      {
        id: 10,
        userId: 101,
        conversationId: 4,
        isOwner: false,
        isMember: true
      },
      {
        id: 11,
        userId: 109,
        conversationId: 4,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 4001,
        conversationId: 4,
        text: "Thanks for the quick turnaround! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia provident doloremque quasi, consequatur debitis quo. Unde repellendus veritatis quaerat soluta!",
        media: {
          id: 8001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-24T11:15:00Z",
          updatedAt: "2024-01-24T11:15:00Z",
          messageId: "4001"
        },
        timestamp: "2024-01-24T11:15:00Z",
        createdAt: "2024-01-24T11:15:00Z",
        updatedAt: "2024-01-24T11:15:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    id: 5,
    name: "Project Alpha Team",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-15T09:30:00Z",
    updatedAt: "2024-01-26T14:22:00Z",
    unreadMessageCount: 3,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=PAT",
    participants: [
      {
        id: 1,
        userId: 101,
        conversationId: 1,
        isOwner: true,
        isMember: true
      },
      {
        id: 2,
        userId: 102,
        conversationId: 1,
        isOwner: false,
        isMember: true
      },
      {
        id: 3,
        userId: 103,
        conversationId: 1,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 1001,
        conversationId: 1,
        text: "Hey team, let's sync up on the project timeline",
        media: {
          id: 5001,
          mediaType: "document",
          filename: "project_timeline.pdf",
          fileSize: 245760,
          content: null,
          createdAt: "2024-01-26T10:15:00Z",
          updatedAt: "2024-01-26T10:15:00Z",
          messageId: "1001"
        },
        timestamp: "2024-01-26T10:15:00Z",
        createdAt: "2024-01-26T10:15:00Z",
        updatedAt: "2024-01-26T10:15:00Z",
        isDeleted: false
      },
      {
        id: 1002,
        conversationId: 1,
        text: "Sounds good! I've reviewed the initial draft",
        media: {
          id: 5002,
          mediaType: "image",
          filename: "feedback_screenshot.png",
          fileSize: 512000,
          content: "data:image/png;base64,iVBORw0KGgoAAAANS...",
          createdAt: "2024-01-26T11:30:00Z",
          updatedAt: "2024-01-26T11:30:00Z",
          messageId: "1002"
        },
        timestamp: "2024-01-26T11:30:00Z",
        createdAt: "2024-01-26T11:30:00Z",
        updatedAt: "2024-01-26T11:30:00Z",
        isDeleted: false
      },
      {
        id: 1003,
        conversationId: 1,
        text: "Can we schedule a meeting for tomorrow?",
        media: {
          id: 5003,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T14:22:00Z",
          updatedAt: "2024-01-26T14:22:00Z",
          messageId: "1003"
        },
        timestamp: "2024-01-26T14:22:00Z",
        createdAt: "2024-01-26T14:22:00Z",
        updatedAt: "2024-01-26T14:22:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: true
  },
  {
    id: 6,
    name: "Sarah Johnson",
    isGroup: false,
    type: "direct",
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-26T13:45:00Z",
    unreadMessageCount: 0,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=SarahJohnson",
    participants: [
      {
        id: 4,
        userId: 101,
        conversationId: 2,
        isOwner: false,
        isMember: true
      },
      {
        id: 5,
        userId: 104,
        conversationId: 2,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 2001,
        conversationId: 2,
        text: "Did you get a chance to look at the proposal?",
        media: {
          id: 6001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T09:20:00Z",
          updatedAt: "2024-01-26T09:20:00Z",
          messageId: "2001"
        },
        timestamp: "2026-01-26T09:20:00Z",
        createdAt: "2024-01-26T09:20:00Z",
        updatedAt: "2024-01-26T09:20:00Z",
        isDeleted: true
      },
      {
        id: 2002,
        conversationId: 2,
        text: "Yes! Here's my feedback in the recording",
        media: {
          id: 6002,
          mediaType: "audio",
          filename: "voice_note_feedback.m4a",
          fileSize: 1048576,
          content: null,
          createdAt: "2024-01-26T13:45:00Z",
          updatedAt: "2024-01-26T13:45:00Z",
          messageId: "2002"
        },
        timestamp: "2026-01-16T13:45:00Z",
        createdAt: "2024-01-26T13:45:00Z",
        updatedAt: "2024-01-26T13:45:00Z",
        isDeleted: true
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    isMuted: false,
    id: 7,
    name: "Marketing Campaign 2024",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-20T14:00:00Z",
    updatedAt: "2024-01-25T16:30:00Z",
    unreadMessageCount: 12,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MC2024",
    participants: [
      {
        id: 6,
        userId: 105,
        conversationId: 3,
        isOwner: true,
        isMember: true
      },
      {
        id: 7,
        userId: 106,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 8,
        userId: 107,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 9,
        userId: 108,
        conversationId: 3,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 3001,
        conversationId: 3,
        text: "Here's the promotional video draft",
        media: {
          id: 7001,
          mediaType: "video",
          filename: "promo_draft_v1.mp4",
          fileSize: 15728640,
          content: null,
          createdAt: "2024-01-25T16:30:00Z",
          updatedAt: "2024-01-25T16:30:00Z",
          messageId: "3001"
        },
        timestamp: "2024-01-25T16:30:00Z",
        createdAt: "2024-01-25T16:30:00Z",
        updatedAt: "2024-01-25T16:30:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[]
  },
  {
    id: 8,
    name: "Mike Chen",
    isGroup: false,
    type: "direct",
    createdAt: "2023-12-05T10:30:00Z",
    updatedAt: "2024-01-24T11:15:00Z",
    unreadMessageCount: 1,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MikeChen",
    participants: [
      {
        id: 10,
        userId: 101,
        conversationId: 4,
        isOwner: false,
        isMember: true
      },
      {
        id: 11,
        userId: 109,
        conversationId: 4,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 4001,
        conversationId: 4,
        text: "Thanks for the quick turnaround! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia provident doloremque quasi, consequatur debitis quo. Unde repellendus veritatis quaerat soluta!",
        media: {
          id: 8001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-24T11:15:00Z",
          updatedAt: "2024-01-24T11:15:00Z",
          messageId: "4001"
        },
        timestamp: "2024-01-24T11:15:00Z",
        createdAt: "2024-01-24T11:15:00Z",
        updatedAt: "2024-01-24T11:15:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    id: 9,
    name: "Project Alpha Team",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-15T09:30:00Z",
    updatedAt: "2024-01-26T14:22:00Z",
    unreadMessageCount: 3,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=PAT",
    participants: [
      {
        id: 1,
        userId: 101,
        conversationId: 1,
        isOwner: true,
        isMember: true
      },
      {
        id: 2,
        userId: 102,
        conversationId: 1,
        isOwner: false,
        isMember: true
      },
      {
        id: 3,
        userId: 103,
        conversationId: 1,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 1001,
        conversationId: 1,
        text: "Hey team, let's sync up on the project timeline",
        media: {
          id: 5001,
          mediaType: "document",
          filename: "project_timeline.pdf",
          fileSize: 245760,
          content: null,
          createdAt: "2024-01-26T10:15:00Z",
          updatedAt: "2024-01-26T10:15:00Z",
          messageId: "1001"
        },
        timestamp: "2024-01-26T10:15:00Z",
        createdAt: "2024-01-26T10:15:00Z",
        updatedAt: "2024-01-26T10:15:00Z",
        isDeleted: false
      },
      {
        id: 1002,
        conversationId: 1,
        text: "Sounds good! I've reviewed the initial draft",
        media: {
          id: 5002,
          mediaType: "image",
          filename: "feedback_screenshot.png",
          fileSize: 512000,
          content: "data:image/png;base64,iVBORw0KGgoAAAANS...",
          createdAt: "2024-01-26T11:30:00Z",
          updatedAt: "2024-01-26T11:30:00Z",
          messageId: "1002"
        },
        timestamp: "2024-01-26T11:30:00Z",
        createdAt: "2024-01-26T11:30:00Z",
        updatedAt: "2024-01-26T11:30:00Z",
        isDeleted: false
      },
      {
        id: 1003,
        conversationId: 1,
        text: "Can we schedule a meeting for tomorrow?",
        media: {
          id: 5003,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T14:22:00Z",
          updatedAt: "2024-01-26T14:22:00Z",
          messageId: "1003"
        },
        timestamp: "2024-01-26T14:22:00Z",
        createdAt: "2024-01-26T14:22:00Z",
        updatedAt: "2024-01-26T14:22:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: true
  },
  {
    id: 10,
    name: "Sarah Johnson",
    isGroup: false,
    type: "direct",
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-26T13:45:00Z",
    unreadMessageCount: 0,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=SarahJohnson",
    participants: [
      {
        id: 4,
        userId: 101,
        conversationId: 2,
        isOwner: false,
        isMember: true
      },
      {
        id: 5,
        userId: 104,
        conversationId: 2,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 2001,
        conversationId: 2,
        text: "Did you get a chance to look at the proposal?",
        media: {
          id: 6001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T09:20:00Z",
          updatedAt: "2024-01-26T09:20:00Z",
          messageId: "2001"
        },
        timestamp: "2026-01-26T09:20:00Z",
        createdAt: "2024-01-26T09:20:00Z",
        updatedAt: "2024-01-26T09:20:00Z",
        isDeleted: true
      },
      {
        id: 2002,
        conversationId: 2,
        text: "Yes! Here's my feedback in the recording",
        media: {
          id: 6002,
          mediaType: "audio",
          filename: "voice_note_feedback.m4a",
          fileSize: 1048576,
          content: null,
          createdAt: "2024-01-26T13:45:00Z",
          updatedAt: "2024-01-26T13:45:00Z",
          messageId: "2002"
        },
        timestamp: "2026-01-16T13:45:00Z",
        createdAt: "2024-01-26T13:45:00Z",
        updatedAt: "2024-01-26T13:45:00Z",
        isDeleted: true
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    isMuted: false,
    id: 11,
    name: "Marketing Campaign 2024",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-20T14:00:00Z",
    updatedAt: "2024-01-25T16:30:00Z",
    unreadMessageCount: 12,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MC2024",
    participants: [
      {
        id: 6,
        userId: 105,
        conversationId: 3,
        isOwner: true,
        isMember: true
      },
      {
        id: 7,
        userId: 106,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 8,
        userId: 107,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 9,
        userId: 108,
        conversationId: 3,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 3001,
        conversationId: 3,
        text: "Here's the promotional video draft",
        media: {
          id: 7001,
          mediaType: "video",
          filename: "promo_draft_v1.mp4",
          fileSize: 15728640,
          content: null,
          createdAt: "2024-01-25T16:30:00Z",
          updatedAt: "2024-01-25T16:30:00Z",
          messageId: "3001"
        },
        timestamp: "2024-01-25T16:30:00Z",
        createdAt: "2024-01-25T16:30:00Z",
        updatedAt: "2024-01-25T16:30:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[]
  },
  {
    id: 12,
    name: "Mike Chen",
    isGroup: false,
    type: "direct",
    createdAt: "2023-12-05T10:30:00Z",
    updatedAt: "2024-01-24T11:15:00Z",
    unreadMessageCount: 1,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MikeChen",
    participants: [
      {
        id: 10,
        userId: 101,
        conversationId: 4,
        isOwner: false,
        isMember: true
      },
      {
        id: 11,
        userId: 109,
        conversationId: 4,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 4001,
        conversationId: 4,
        text: "Thanks for the quick turnaround! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia provident doloremque quasi, consequatur debitis quo. Unde repellendus veritatis quaerat soluta!",
        media: {
          id: 8001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-24T11:15:00Z",
          updatedAt: "2024-01-24T11:15:00Z",
          messageId: "4001"
        },
        timestamp: "2024-01-24T11:15:00Z",
        createdAt: "2024-01-24T11:15:00Z",
        updatedAt: "2024-01-24T11:15:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    id: 13,
    name: "Project Alpha Team",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-15T09:30:00Z",
    updatedAt: "2024-01-26T14:22:00Z",
    unreadMessageCount: 3,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=PAT",
    participants: [
      {
        id: 1,
        userId: 101,
        conversationId: 1,
        isOwner: true,
        isMember: true
      },
      {
        id: 2,
        userId: 102,
        conversationId: 1,
        isOwner: false,
        isMember: true
      },
      {
        id: 3,
        userId: 103,
        conversationId: 1,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 1001,
        conversationId: 1,
        text: "Hey team, let's sync up on the project timeline",
        media: {
          id: 5001,
          mediaType: "document",
          filename: "project_timeline.pdf",
          fileSize: 245760,
          content: null,
          createdAt: "2024-01-26T10:15:00Z",
          updatedAt: "2024-01-26T10:15:00Z",
          messageId: "1001"
        },
        timestamp: "2024-01-26T10:15:00Z",
        createdAt: "2024-01-26T10:15:00Z",
        updatedAt: "2024-01-26T10:15:00Z",
        isDeleted: false
      },
      {
        id: 1002,
        conversationId: 1,
        text: "Sounds good! I've reviewed the initial draft",
        media: {
          id: 5002,
          mediaType: "image",
          filename: "feedback_screenshot.png",
          fileSize: 512000,
          content: "data:image/png;base64,iVBORw0KGgoAAAANS...",
          createdAt: "2024-01-26T11:30:00Z",
          updatedAt: "2024-01-26T11:30:00Z",
          messageId: "1002"
        },
        timestamp: "2024-01-26T11:30:00Z",
        createdAt: "2024-01-26T11:30:00Z",
        updatedAt: "2024-01-26T11:30:00Z",
        isDeleted: false
      },
      {
        id: 1003,
        conversationId: 1,
        text: "Can we schedule a meeting for tomorrow?",
        media: {
          id: 5003,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T14:22:00Z",
          updatedAt: "2024-01-26T14:22:00Z",
          messageId: "1003"
        },
        timestamp: "2024-01-26T14:22:00Z",
        createdAt: "2024-01-26T14:22:00Z",
        updatedAt: "2024-01-26T14:22:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: true
  },
  {
    id: 14,
    name: "Sarah Johnson",
    isGroup: false,
    type: "direct",
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-26T13:45:00Z",
    unreadMessageCount: 0,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=SarahJohnson",
    participants: [
      {
        id: 4,
        userId: 101,
        conversationId: 2,
        isOwner: false,
        isMember: true
      },
      {
        id: 5,
        userId: 104,
        conversationId: 2,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 2001,
        conversationId: 2,
        text: "Did you get a chance to look at the proposal?",
        media: {
          id: 6001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T09:20:00Z",
          updatedAt: "2024-01-26T09:20:00Z",
          messageId: "2001"
        },
        timestamp: "2026-01-26T09:20:00Z",
        createdAt: "2024-01-26T09:20:00Z",
        updatedAt: "2024-01-26T09:20:00Z",
        isDeleted: true
      },
      {
        id: 2002,
        conversationId: 2,
        text: "Yes! Here's my feedback in the recording",
        media: {
          id: 6002,
          mediaType: "audio",
          filename: "voice_note_feedback.m4a",
          fileSize: 1048576,
          content: null,
          createdAt: "2024-01-26T13:45:00Z",
          updatedAt: "2024-01-26T13:45:00Z",
          messageId: "2002"
        },
        timestamp: "2026-01-16T13:45:00Z",
        createdAt: "2024-01-26T13:45:00Z",
        updatedAt: "2024-01-26T13:45:00Z",
        isDeleted: true
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    isMuted: false,
    id: 15,
    name: "Marketing Campaign 2024",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-20T14:00:00Z",
    updatedAt: "2024-01-25T16:30:00Z",
    unreadMessageCount: 12,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MC2024",
    participants: [
      {
        id: 6,
        userId: 105,
        conversationId: 3,
        isOwner: true,
        isMember: true
      },
      {
        id: 7,
        userId: 106,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 8,
        userId: 107,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 9,
        userId: 108,
        conversationId: 3,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 3001,
        conversationId: 3,
        text: "Here's the promotional video draft",
        media: {
          id: 7001,
          mediaType: "video",
          filename: "promo_draft_v1.mp4",
          fileSize: 15728640,
          content: null,
          createdAt: "2024-01-25T16:30:00Z",
          updatedAt: "2024-01-25T16:30:00Z",
          messageId: "3001"
        },
        timestamp: "2024-01-25T16:30:00Z",
        createdAt: "2024-01-25T16:30:00Z",
        updatedAt: "2024-01-25T16:30:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[]
  },
  {
    id: 16,
    name: "Mike Chen",
    isGroup: false,
    type: "direct",
    createdAt: "2023-12-05T10:30:00Z",
    updatedAt: "2024-01-24T11:15:00Z",
    unreadMessageCount: 1,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MikeChen",
    participants: [
      {
        id: 10,
        userId: 101,
        conversationId: 4,
        isOwner: false,
        isMember: true
      },
      {
        id: 11,
        userId: 109,
        conversationId: 4,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 4001,
        conversationId: 4,
        text: "Thanks for the quick turnaround! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia provident doloremque quasi, consequatur debitis quo. Unde repellendus veritatis quaerat soluta!",
        media: {
          id: 8001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-24T11:15:00Z",
          updatedAt: "2024-01-24T11:15:00Z",
          messageId: "4001"
        },
        timestamp: "2024-01-24T11:15:00Z",
        createdAt: "2024-01-24T11:15:00Z",
        updatedAt: "2024-01-24T11:15:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    id: 17,
    name: "Project Alpha Team",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-15T09:30:00Z",
    updatedAt: "2024-01-26T14:22:00Z",
    unreadMessageCount: 3,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=PAT",
    participants: [
      {
        id: 1,
        userId: 101,
        conversationId: 1,
        isOwner: true,
        isMember: true
      },
      {
        id: 2,
        userId: 102,
        conversationId: 1,
        isOwner: false,
        isMember: true
      },
      {
        id: 3,
        userId: 103,
        conversationId: 1,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 1001,
        conversationId: 1,
        text: "Hey team, let's sync up on the project timeline",
        media: {
          id: 5001,
          mediaType: "document",
          filename: "project_timeline.pdf",
          fileSize: 245760,
          content: null,
          createdAt: "2024-01-26T10:15:00Z",
          updatedAt: "2024-01-26T10:15:00Z",
          messageId: "1001"
        },
        timestamp: "2024-01-26T10:15:00Z",
        createdAt: "2024-01-26T10:15:00Z",
        updatedAt: "2024-01-26T10:15:00Z",
        isDeleted: false
      },
      {
        id: 1002,
        conversationId: 1,
        text: "Sounds good! I've reviewed the initial draft",
        media: {
          id: 5002,
          mediaType: "image",
          filename: "feedback_screenshot.png",
          fileSize: 512000,
          content: "data:image/png;base64,iVBORw0KGgoAAAANS...",
          createdAt: "2024-01-26T11:30:00Z",
          updatedAt: "2024-01-26T11:30:00Z",
          messageId: "1002"
        },
        timestamp: "2024-01-26T11:30:00Z",
        createdAt: "2024-01-26T11:30:00Z",
        updatedAt: "2024-01-26T11:30:00Z",
        isDeleted: false
      },
      {
        id: 1003,
        conversationId: 1,
        text: "Can we schedule a meeting for tomorrow?",
        media: {
          id: 5003,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T14:22:00Z",
          updatedAt: "2024-01-26T14:22:00Z",
          messageId: "1003"
        },
        timestamp: "2024-01-26T14:22:00Z",
        createdAt: "2024-01-26T14:22:00Z",
        updatedAt: "2024-01-26T14:22:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: true
  },
  {
    id: 18,
    name: "Sarah Johnson",
    isGroup: false,
    type: "direct",
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-26T13:45:00Z",
    unreadMessageCount: 0,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=SarahJohnson",
    participants: [
      {
        id: 4,
        userId: 101,
        conversationId: 2,
        isOwner: false,
        isMember: true
      },
      {
        id: 5,
        userId: 104,
        conversationId: 2,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 2001,
        conversationId: 2,
        text: "Did you get a chance to look at the proposal?",
        media: {
          id: 6001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-26T09:20:00Z",
          updatedAt: "2024-01-26T09:20:00Z",
          messageId: "2001"
        },
        timestamp: "2026-01-26T09:20:00Z",
        createdAt: "2024-01-26T09:20:00Z",
        updatedAt: "2024-01-26T09:20:00Z",
        isDeleted: true
      },
      {
        id: 2002,
        conversationId: 2,
        text: "Yes! Here's my feedback in the recording",
        media: {
          id: 6002,
          mediaType: "audio",
          filename: "voice_note_feedback.m4a",
          fileSize: 1048576,
          content: null,
          createdAt: "2024-01-26T13:45:00Z",
          updatedAt: "2024-01-26T13:45:00Z",
          messageId: "2002"
        },
        timestamp: "2026-01-16T13:45:00Z",
        createdAt: "2024-01-26T13:45:00Z",
        updatedAt: "2024-01-26T13:45:00Z",
        isDeleted: true
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  },
  {
    isMuted: false,
    id: 19,
    name: "Marketing Campaign 2024",
    isGroup: true,
    type: "group",
    createdAt: "2024-01-20T14:00:00Z",
    updatedAt: "2024-01-25T16:30:00Z",
    unreadMessageCount: 12,
    isPinned: true,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MC2024",
    participants: [
      {
        id: 6,
        userId: 105,
        conversationId: 3,
        isOwner: true,
        isMember: true
      },
      {
        id: 7,
        userId: 106,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 8,
        userId: 107,
        conversationId: 3,
        isOwner: false,
        isMember: true
      },
      {
        id: 9,
        userId: 108,
        conversationId: 3,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 3001,
        conversationId: 3,
        text: "Here's the promotional video draft",
        media: {
          id: 7001,
          mediaType: "video",
          filename: "promo_draft_v1.mp4",
          fileSize: 15728640,
          content: null,
          createdAt: "2024-01-25T16:30:00Z",
          updatedAt: "2024-01-25T16:30:00Z",
          messageId: "3001"
        },
        timestamp: "2024-01-25T16:30:00Z",
        createdAt: "2024-01-25T16:30:00Z",
        updatedAt: "2024-01-25T16:30:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[]
  },
  {
    id: 20,
    name: "Mike Chen",
    isGroup: false,
    type: "direct",
    createdAt: "2023-12-05T10:30:00Z",
    updatedAt: "2024-01-24T11:15:00Z",
    unreadMessageCount: 1,
    isPinned: false,
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=MikeChen",
    participants: [
      {
        id: 10,
        userId: 101,
        conversationId: 4,
        isOwner: false,
        isMember: true
      },
      {
        id: 11,
        userId: 109,
        conversationId: 4,
        isOwner: false,
        isMember: true
      }
    ],
    messages: [
      {
        id: 4001,
        conversationId: 4,
        text: "Thanks for the quick turnaround! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia provident doloremque quasi, consequatur debitis quo. Unde repellendus veritatis quaerat soluta!",
        media: {
          id: 8001,
          mediaType: "other",
          filename: "",
          fileSize: 0,
          content: null,
          createdAt: "2024-01-24T11:15:00Z",
          updatedAt: "2024-01-24T11:15:00Z",
          messageId: "4001"
        },
        timestamp: "2024-01-24T11:15:00Z",
        createdAt: "2024-01-24T11:15:00Z",
        updatedAt: "2024-01-24T11:15:00Z",
        isDeleted: false
      }
    ].toSorted(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) as Message[],
    isMuted: false
  }
]

export const folders: Folder[] = [
  {
    id: 1,
    name: "All",
    conversationsWithUnreadMessagesCount: 10000,

    slug: "default"
  },
  {
    id: 2,
    name: "Unread",
    conversationsWithUnreadMessagesCount: 2,
    slug: "unread"
  },
  {
    id: 3,
    name: "Work",
    conversationsWithUnreadMessagesCount: 1,
    slug: "work"
  },
  {
    id: 4,
    name: "Personal",
    conversationsWithUnreadMessagesCount: 1,
    slug: "personal"
  },
  {
    id: 5,
    name: "Other",
    conversationsWithUnreadMessagesCount: 0,
    slug: "other"
  },
  {
    id: 6,
    name: "Group",
    conversationsWithUnreadMessagesCount: 120000404,
    slug: "group"
  },
  {
    id: 7,
    name: "Pinned",
    conversationsWithUnreadMessagesCount: 999,
    slug: "pinned"
  },
  {
    id: 8,
    name: "Muted",
    conversationsWithUnreadMessagesCount: 0,
    slug: "muted"
  },
  {
    id: 9,
    name: "Archived",
    conversationsWithUnreadMessagesCount: 123,
    slug: "archived"
  }
]
