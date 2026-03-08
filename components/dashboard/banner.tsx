import BannerImage from "@/public/banner.jpg"
import Image from "next/image"

export const Banner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2">
      <Image
        src={BannerImage}
        alt="banner"
        className="h-auto w-[max(40dvw,40dvh)]"
        loading="eager"
        width={3200}
        height={2400}
      />
      <h1 className="lg:text-xl text-base text-center uppercase font-semibold">
        Select a conversation to continue
      </h1>
    </div>
  )
}
