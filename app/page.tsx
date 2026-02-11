import { ProfileHeader } from "@/components/profile-header"
import { ActionButtons } from "@/components/action-buttons"
import { ContentSections } from "@/components/content-sections"
import { VizcoFooter } from "@/components/vizco-footer"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
      <ProfileHeader />
      <ActionButtons />
      <ContentSections />
      <div className="flex-1" />
      <VizcoFooter />
    </main>
  )
}
