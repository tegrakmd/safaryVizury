import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface IappProps {
  title: string;
  description: string;
}

export function BadgePr({ description, title }: IappProps) {
  return (
    <Link
      href="/"
      className="flex items-center justify-between  gap-x-2 border  rounded-lg  p-0.5 w-fit cursor-pointer">
      <Badge variant={"secondary"} className="text-xs text-center w-fit">
        {title}
      </Badge>
      <span className="mr-1 text-xs dark:text-white">{description}</span>
    </Link>
  );
}
