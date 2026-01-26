import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <div className="animate-spin h-fit w-fit">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("size-4", className)}
        {...props}
      />
    </div>
  )
}

export { Spinner }
