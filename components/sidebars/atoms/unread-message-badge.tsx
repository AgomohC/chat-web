import { Badge } from "@/components/ui/badge"
import { numberParsers } from "@/lib/number-parsers"
import { cn } from "@/lib/utils"
export const UnreadMessageBadge = (props: {
  unreadMessageCount: number
  className?: string
}) => {
  return (
    <Badge className={cn("select-none", props.className)}>
      {numberParsers.formatToCompactNumber(props.unreadMessageCount)}
    </Badge>
  )
}
