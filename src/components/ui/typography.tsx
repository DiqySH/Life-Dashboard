import { ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface TypographyProps {
  className?: string;
  children?: ReactNode;
}

const TypographyH1 = ({ className, children }: TypographyProps) => (
  <h1
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
      className
    )}
  >
    {children}
  </h1>
);

const TypographyH2 = ({ className, children }: TypographyProps) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className
    )}
  >
    {children}
  </h2>
);

const TypographyH3 = ({ className, children }: TypographyProps) => (
  <h3
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className
    )}
  >
    {children}
  </h3>
);

const TypographyH4 = ({ className, children }: TypographyProps) => (
  <h4
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
  >
    {children}
  </h4>
);

const TypographyP = ({ className, children }: TypographyProps) => (
  <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
    {children}
  </p>
);

const TypographyBlockquote = ({ className, children }: TypographyProps) => (
  <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
    {children}
  </blockquote>
);

const TypographyList = ({ className, children }: TypographyProps) => (
  <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
    {children}
  </ul>
);

const TypographyInlineCode = ({ className, children }: TypographyProps) => (
  <code
    className={cn(
      "bg-muted relative rounded px-[0.3rem] py-[0.2rem] !font-mono text-sm font-semibold",
      className
    )}
  >
    {children}
  </code>
);

const TypographyLead = ({ className, children }: TypographyProps) => (
  <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
);

const TypographyLarge = ({ className, children }: TypographyProps) => (
  <div className={cn("text-lg font-semibold", className)}>{children}</div>
);

const TypographySmall = ({ className, children }: TypographyProps) => (
  <small className={cn("text-sm leading-none font-medium", className)}>
    {children}
  </small>
);

const TypographyMuted = ({ className, children }: TypographyProps) => (
  <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
);

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted
};
