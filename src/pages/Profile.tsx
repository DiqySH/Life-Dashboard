import { PageContent, PageSection } from "@/components/ui/pageSection"
import ProfilePictureChanger from "@/components/ui/ProfilePictureChanger"

const Profile = () => {
  return (
    <PageSection pageName="Profile">
        <PageContent>
            <ProfilePictureChanger/>    
        </PageContent>
    </PageSection>
  )
}

export default Profile