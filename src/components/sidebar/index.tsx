"use client";

import { CarFront } from "lucide-react";
import { DropdownItem, DropdownMenu } from "..";
import { sidebarOptions } from "@/app/mocks/sidebar";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="w-full h-full flex flex-col rounded-lg bg-light-primary-main p-4">
      <div className="rounded-lg overflow-hidden"><RenderMenu /></div>
    </div>
  );
}

function RenderMenu() {
  const router = useRouter();
  const redirectTo = (path: string) => {
    console.log("Path:", path);
    router.replace(path);
  };

  return sidebarOptions.map((option, index) => {
    switch (option.type) {
      case "dropdown":
        return (
          <DropdownMenu label={option.label} Icon={option.Icon}>
            {option.options?.map((subOption, index) => (
              <DropdownItem
                key={index}
                onSelect={() => redirectTo(subOption.link)}
              >
                {subOption.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        );
      case "anchor":
        return (
          <Link href={option.path!} className="w-full px-2 py-1 flex items-center text-light-background-main bg-light-primary-dark gap-1">
            <option.Icon size={20} />
            {option.label}
          </Link>
        );
    }
  });
}
