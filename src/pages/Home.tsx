import { PageSection, PageContent } from "@/components/ui/pageSection";
import {
  TypographyH1,
} from "@/components/ui/typography";
import { useUsername } from "@/hooks/use-avatar-and-username";

const Home = () => {
  const { username } = useUsername();
  const getGreeting = (username: string): string => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 10) {
      return `Good morning 🌅 ${username}!`;
    } else if (hour >= 10 && hour < 16) {
      return `Good afternoon ☀️ ${username}!`;
    } else if (hour >= 16 && hour < 19) {
      return `Good evening 🌇 ${username}!`;
    } else {
      return `Good night 🌙 ${username}!`;
    }
  };
  return (
    <PageSection pageName="Home">
      <PageContent>
        <div className="flex flex-col">
          <TypographyH1 className="w-fit">
            {getGreeting(username)}
          </TypographyH1>
        </div>
      </PageContent>
    </PageSection>
  );
};

export default Home;
