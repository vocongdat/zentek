"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import NftDropsCalendarImage from "@/public/images/nft-drops.webp";
import Image from "next/image";
import Container from "./container";

export default function NftDropsCalendar() {
  return (
    <Carousel
      className="w-full laptop:max-w-[600px]"
      opts={{ skipSnaps: true }}
    >
      <Container
        title="NFT Drops Calendar"
        rightContent={
          <div className="flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        }
        className="mr-4"
        contentRightClassName="mr-0"
      >
        <CarouselContent className="ml-0 h-[171px] laptop:h-60">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "laptop:w-full w-[110px]",
                !index ? "pl-0" : "pl-2",
              )}
            >
              <Card className="py-0">
                <CardContent className="p-0">
                  <Image
                    src={NftDropsCalendarImage}
                    alt="NftDropsCalendarImage"
                    className="size-full laptop:object-contain object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Container>
    </Carousel>
  );
}
