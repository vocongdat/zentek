import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Title from "./title";

interface ContainerProps {
  children: ReactNode;
  title: string;
  className?: string;
  titleClassName?: string;
  rightContent?: ReactNode;
  contentRightClassName?: string;
}

export default function Container({
  children,
  title,
  className,
  titleClassName,
  rightContent,
  contentRightClassName,
}: ContainerProps) {
  return (
    <div className={cn("laptop:ml-0 ml-4 space-y-2", className)}>
      {rightContent ? (
        <div
          className={cn(
            "mr-4 flex items-center justify-between",
            contentRightClassName,
          )}
        >
          <Title title={title} className={titleClassName} />
          {rightContent}
        </div>
      ) : (
        <Title title={title} className={titleClassName} />
      )}
      {children}
    </div>
  );
}
