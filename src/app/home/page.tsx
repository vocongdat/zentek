import Banner from "./_components/banner";
import NewCollection from "./_components/new-collection";
import NftDropsCalendar from "./_components/nft-drops-calendar";
import Other from "./_components/other";

export default function Page() {
  return (
    <div className="laptop:flex laptop:flex-col laptop:items-center laptop:space-y-20 space-y-10">
      <Banner />
      <NewCollection />
      <div className="laptop:flex laptop:w-full laptop:max-w-[1128px] laptop:gap-6">
        <NftDropsCalendar />
        <Other />
      </div>
    </div>
  );
}
