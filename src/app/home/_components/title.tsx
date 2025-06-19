import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className }: TitleProps) {
  return (
    <h6
      className={cn(
        "whitespace-nowrap font-black text-2xl text-primary-normal uppercase tracking-normal",
        className,
      )}
    >
      {title}
    </h6>
  );
}
