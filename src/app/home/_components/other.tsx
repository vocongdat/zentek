import HotNftImage from "@/public/images/hot-nft/hot-nft-1.webp";
import PromotionImage from "@/public/images/hot-nft/hot-nft-2.webp";
import Image from "next/image";
import Container from "./container";

export default function Other() {
  return (
    <div className="mx-4 flex items-center justify-between gap-4">
      <Container title="HOT NFT" className="ml-0 w-1/2">
        <Image src={HotNftImage} alt="HOT NFT" />
      </Container>
      <Container title="PROMOTION" className="ml-0 w-1/2">
        <Image src={PromotionImage} alt="PROMOTION" />
      </Container>
    </div>
  );
}
