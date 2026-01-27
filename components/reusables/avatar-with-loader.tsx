import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Fragment, useState } from "react"
import { Skeleton } from "../ui/skeleton"

export const AvatarWithLoader = ({
  src,
  alt,
  classnames,
  fallback,
  loading
}: {
  src: string
  alt: string
  classnames?: {
    image?: string
    root?: string
    fallback?: string
    skeleton?: string
  }
  fallback: string
  loading: boolean
}) => {
  const [isLoading, setIsLoading] = useState(loading)
  return (
    <Fragment>
      <Avatar
        className={cn(classnames?.root, {
          hidden: isLoading
        })}
      >
        <AvatarImage
          src={src}
          alt={alt}
          onLoadingStatusChange={(status) => {
            if (status === "loaded" || status == "error") {
              setIsLoading(false)
            }
          }}
          className={classnames?.image}
        />
        <AvatarFallback className={classnames?.fallback} delayMs={200}>
          {fallback}
        </AvatarFallback>
      </Avatar>

      {isLoading ? (
        <Skeleton
          className={cn(
            `min-h-8 min-w-8 rounded-lg z-50 bg-white`,
            classnames?.skeleton
          )}
        />
      ) : null}
    </Fragment>
  )
}
