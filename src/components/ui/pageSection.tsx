import React from "react";
import { SidebarTrigger } from "./sidebar";
import { Separator } from "./separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbPage } from "./breadcrumb";

interface PageContentProps {
  children: React.ReactNode;
}

interface PageSectionProps {
  children: React.ReactNode;
  pageName: string;
}

const PageSection = ({ children, pageName }: PageSectionProps) => {
  return (
    <main className="w-full flex flex-col items-center pt-3">
      <div className="max-w-[1200px] w-full flex items-center gap-2 md:px-0 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="data-[orientation=vertical]:h-4"/>
        <Breadcrumb className="ml-2">
          <BreadcrumbItem>
            <BreadcrumbPage>{pageName}</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Separator className="mt-3"/>
      {children}
    </main>
  );
};

const PageContent = ({ children }: PageContentProps) => {
  return <section className="max-w-[1200px] w-full md:px-0 px-3">{children}</section>;
};

export { PageSection, PageContent };
