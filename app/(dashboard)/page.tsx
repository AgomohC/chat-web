import { Banner } from "@/components/dashboard/banner"

type Props = {
  searchParams: Promise<{
    conversationId?: string
  }>
}

export default async function DashboardPage({ searchParams }: Props) {
  const { conversationId } = await searchParams
  if (!conversationId) {
    return <Banner />
  }
  return <></>
}
