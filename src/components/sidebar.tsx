import { DottedSeperator } from "@/components/dotted-seperator";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { Projects } from "./projects";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={48} />
      </Link>
      <DottedSeperator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeperator className="my-4" />
      <Navigation />
      <DottedSeperator className="my-4" />
      <Projects />
    </aside>
  );
};
