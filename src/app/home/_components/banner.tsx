"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BannerPCImage from "@/public/images/banners/banner-pc.webp";
import BannerMobileImage from "@/public/images/banners/banner-sp.webp";
import Image from "next/image";
import Category from "./category";

export default function Banner() {
  return (
    <div className="flex h-fit laptop:w-full w-full flex-col items-center justify-center">
      <Carousel className="w-full" opts={{ loop: true }} hasDots>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="py-0">
                <CardContent className="p-0">
                  <Image
                    src={BannerPCImage}
                    alt="Banner"
                    className="laptop:block hidden h-auto w-full object-contain"
                  />
                  <Image
                    src={BannerMobileImage}
                    alt="Banner"
                    className="laptop:hidden h-[180px] w-auto object-contain"
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
