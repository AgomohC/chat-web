import { Media, Message } from "@/lib/models"
import { safeString } from "@/lib/utils"
import { Paperclip, File, Music2, Video } from "lucide-react"
import Image from "next/image"

export const MessageContentPreview = (props: {
  message: Message
  isGroup: boolean
}) => {
  const { message, isGroup } = props

  return (
    <div className="text-sm text-gray-500 flex gap-0.5 items-center flex-1 min-w-0">
      {isGroup ? <p className="font-semibold ">You:</p> : null}
      <MediaPreview media={message.media} />
      <p className="truncate flex-1">{message.text}</p>
    </div>
  )
}

export const MediaPreview = (props: { media: Media | undefined }) => {
  const { media } = props

  if (!media) return null
  if (media.mediaType === "audio") {
    return <Music2 size={14} className="mt-0.5" />
  }
  if (media.mediaType === "video") {
    return <Video size={14} className="mt-0.5" />
  }

  if (media.mediaType === "image") {
    return (
      <Image
        src={safeString(media.content)}
        alt={media.filename}
        width={24}
        height={24}
        className="aspect-square size-3.5"
      />
    )
  }

  if (media.mediaType === "document") {
    return <Paperclip size={14} className="mt-0.5" />
  }

  return <File size={14} className="mt-0.5" />
}
