import { dateTimeParser } from "@/lib/date-time-parsers"
import { cn } from "@/lib/utils"

export const TimeDisplay = (props: {
  dateTime: string | null
  className?: string
}) => {
  const { dateTime, className } = props

  if (!dateTime) {
    return null
  }
  const timestamp = dateTimeParser.getConversationTimeStamp(dateTime)
  return (
    <span className={cn("text-xs text-foreground opacity-85", className)}>
      {timestamp}
    </span>
  )
}
