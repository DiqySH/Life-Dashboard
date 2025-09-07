import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./sidebar_contents/nav-user";
import { NavSecondary } from "./sidebar_contents/nav-secondary";
import { GithubIcon, Send, HeartHandshake, Home } from "lucide-react";
import { useUser } from "@/context/user";
import { Link } from "react-router";
import { TypographyP } from "@/components/ui/typography";
import { NavPages } from "./sidebar_contents/nav-pages";
import { useAvatar, useUsername } from "@/hooks/use-avatar-and-username";

const navSecondary = [
  {
    title: "Source Code",
    url: "https://github.com/DiqySH/Life-Dashboard",
    icon: GithubIcon,
  },
  {
    title: "Feedback",
    url: "#",
    icon: Send,
  },
];

const navPages = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
];

export const AppSidebar = () => {
  const { email } = useUser();
  const { avatar } = useAvatar();
  const { username } = useUsername();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="">
              <Link to={"/"} className="flex">
                <HeartHandshake />
                <TypographyP className="!mt-0 text-base font-semibold min-w-[120px]">
                  Life Dashboard.
                </TypographyP>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavPages items={navPages} />
        <SidebarGroup />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            username: username,
            email: email,
            avatar: avatar,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
};
