"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer flex items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image
            src={"/icons/logo.svg"}
            alt="Podcastr"
            width={23}
            height={27}
          />
          <h1 className="text-24 font-bold text-white-1 max-lg:hidden">
            Podcastr
          </h1>
        </div>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActiveRoute =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <div
              onClick={() => router.push(route)}
              key={label}
              className={cn(
                "flex_center cursor-pointer gap-3 py-4 max-lg:px-4 lg:justify-start",
                {
                  "bg-nav-focus border-r-4 border-orange-1": isActiveRoute,
                }
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <span>{label}</span>
            </div>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
