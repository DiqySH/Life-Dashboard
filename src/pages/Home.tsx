import { PageSection, PageContent } from "@/components/ui/pageSection";
import { TypographyBlockquote, TypographyH1, TypographyH2, TypographyInlineCode } from "@/components/ui/typography";

const Home = () => {
  return (
    <PageSection pageName="Home">
      <PageContent>
        <div className="flex flex-col">
          <TypographyH1 className="mt-10 w-fit">Taxing Laughter: The Joke Tax Chronicles</TypographyH1>
          <TypographyH2>Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.</TypographyH2>
          <TypographyInlineCode>anjay</TypographyInlineCode>
          <TypographyBlockquote>&quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
      it&apos;s only fair that they should pay for the privilege.&quot;</TypographyBlockquote>
        </div>
      </PageContent>
    </PageSection>
  );
};

export default Home;
