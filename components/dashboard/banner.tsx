export const Banner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2">
      <div className="bg-[url('/banner.avif')] bg-cover bg-center bg-no-repeat h-[min(40dvh,40dvw)] w-[max(40dvw,40dvh)] " />

      <h1 className="text-xl text-center uppercase font-semibold">
        Select a conversation to continue
      </h1>
    </div>
  )
}
