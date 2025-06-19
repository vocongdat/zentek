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
import CollectionOne from "@/public/images/collection/collection-1.webp";
import CollectionTwo from "@/public/images/collection/collection-2.webp";
import CollectionThree from "@/public/images/collection/collection-3.webp";
import CollectionFour from "@/public/images/collection/collection-4.webp";
import CollectionFive from "@/public/images/collection/collection-5.webp";
import CollectionSix from "@/public/images/collection/collection-6.webp";
import Image from "next/image";
import Container from "./container";

const newCollection = [
  {
    id: 1,
    image: CollectionOne,
  },
  {
    id: 2,
    image: CollectionTwo,
  },
  {
    id: 3,
    image: CollectionThree,
  },
  {
    id: 4,
    image: CollectionFour,
  },
  {
    id: 5,
    image: CollectionFive,
  },
  {
    id: 6,
    image: CollectionSix,
  },
  {
    id: 7,
    image: CollectionOne,
  },
  {
    id: 8,
    image: CollectionTwo,
  },
  {
    id: 9,
    image: CollectionThree,
  },
  {
    id: 10,
    image: CollectionFour,
  },
  {
    id: 11,
    image: CollectionFive,
  },
  {
    id: 12,
    image: CollectionSix,
  },
];

export default function NewCollection() {
  return (
    <div className="laptop:w-full laptop:max-w-[1128px]">
      <Carousel className="w-full" opts={{ skipSnaps: true }}>
        <Container
          title="New Collection"
          rightContent={
            <div className="flex items-center gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          }
        >
          <CarouselContent className="laptop:-ml-4 ml-0 h-[140px] laptop:h-[245px]">
            {newCollection.map((item) => (
              <CarouselItem
                key={item.id}
                className={cn(
                  "laptop:w-[196px] w-[110px] basis-auto laptop:pl-4 pl-2",
                  item.id === 1 && "pl-0",
                )}
              >
                <Card className="py-0">
                  <CardContent className="p-0">
                    <Image
                      src={item.image}
                      alt="Banner"
                      className="size-full object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Container>
      </Carousel>
    </div>
  );
}
