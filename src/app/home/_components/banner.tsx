"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BannerImage from "@/public/images/banners/banner.webp";
import Image from "next/image";
import Category from "./category";

export default function Banner() {
  return (
    <div className="flex h-fit laptop:w-full w-full flex-col items-center justify-center">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="py-0">
                <CardContent className="p-0">
                  <Image
                    src={BannerImage}
                    alt="Banner"
                    className="h-[180px] laptop:h-auto laptop:w-full w-auto object-contain"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Category />
    </div>
  );
}
