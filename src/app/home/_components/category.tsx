"use client";

import CashbackIcon from "@/components/icons/cashback";
import CasinoIcon from "@/components/icons/casino-icon";
import HowToBuyIcon from "@/components/icons/horse-icon";
import RoadmapIcon from "@/components/icons/plane-icon";
import RankingIcon from "@/components/icons/ranking";
import VideoNftIcon from "@/components/icons/video";
import {} from "@/components/ui/card";
import Link from "next/link";
import type { ReactNode } from "react";

interface CategoryCard {
  id: number;
  title: string;
  icon: ReactNode;
}

const categories: CategoryCard[] = [
  {
    id: 1,
    title: "free to earn",
    icon: <CashbackIcon className="h-10 w-10" />,
  },
  {
    id: 2,
    title: "ranking",
    icon: <RankingIcon className="h-10 w-10" />,
  },
  {
    id: 3,
    title: "video nft",
    icon: <VideoNftIcon className="h-10 w-10" />,
  },
  {
    id: 4,
    title: "how to buy",
    icon: <HowToBuyIcon className="h-10 w-10" />,
  },
  {
    id: 5,
    title: "new NFTS",
    icon: <CasinoIcon className="h-10 w-10" />,
  },
  {
    id: 6,
    title: "roadmaps",
    icon: <RoadmapIcon className="h-10 w-10" />,
  },
];

export default function Category() {
  return (
    <div className="flex w-full laptop:items-center laptop:justify-center bg-[#1A1A1A]">
      <section className="flex w-full laptop:max-w-[1128px] laptop:items-center laptop:justify-between gap-4 overflow-x-auto py-4 pl-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="flex laptop:w-full w-16 flex-col items-center gap-2"
          >
            {category.icon}
            <div className="text-center font-medium text-[10px] text-white uppercase">
              {category.title}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
