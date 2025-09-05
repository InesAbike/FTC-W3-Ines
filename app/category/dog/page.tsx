"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { usePathname } from "next/navigation";
import Link from "next/link";

import CTA from "@/components/category/CTA";
import SmallDogs from "@/components/category/Dogs";

const Page = () => {
  const pathname = usePathname(); // Exemple: /dog/small-dog
  const segments = pathname.split("/").filter(Boolean); // ["dog", "small-dog"]

  return (
    <div>
      <Breadcrumbs className="lg:px-8 px-6  md:pt-12 pt-6 mb-4">
        <BreadcrumbItem>
          <Link href="/" className="text-neutral-60 text-sm font-medium">Home</Link>
        </BreadcrumbItem>

        {segments.map((seg, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");

          return (
            <BreadcrumbItem key={idx}>
              <Link href={href} className="text-neutral-60 text-sm font-medium">
                {seg
                  .replace(/-/g, " ") // remplace les tirets par des espaces
                  .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                {/* Met la 1re lettre en majuscule */}
              </Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>

      <CTA />
      <SmallDogs />
    </div>
  );
};

export default Page;
