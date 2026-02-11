import { VizcoFooter } from "@/components/vizco-footer";
import { ActionButtons } from "@/components/action-buttons";
import { ProfileHeader } from "@/components/profile-header";
import { ContentSections } from "@/components/content-sections";

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
