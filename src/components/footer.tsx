interface FooterItemProps {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

const FooterItem = ({ title, items }: FooterItemProps) => {
  return (
    <div className="laptop:w-[calc(25%-30px)] w-[calc(50%-8px)] space-y-2">
      <div className="mb-3 font-black text-[18px] text-white uppercase">
        {title}
      </div>
      {items.map((item) => (
        <div key={item.title} className="text-neutral-invert-accent capitalize">
          {item.title}
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  const footerItems = [
    {
      title: "About Us",
      items: [
        { title: "Careers", href: "/" },
        { title: "Company Details", href: "/" },
        { title: "Terms & Conditions", href: "/" },
        { title: "Help center", href: "/" },
        { title: "Privacy Policy", href: "/" },
        { title: "Affiliate", href: "/" },
      ],
    },
    {
      title: "Products",
      items: [
        { title: "NFT Marketplace", href: "/" },
        { title: "Slingshot", href: "/" },
        { title: "Swaps", href: "/" },
        { title: "NFT Launchpad", href: "/" },
        { title: "Runes Platform", href: "/" },
        { title: "Creator Dashboard", href: "/" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Support", href: "/" },
        { title: "API", href: "/" },
        { title: "Feature Requests", href: "/" },
        { title: "Trust & Safety", href: "/" },
        { title: "Sitemap", href: "/" },
      ],
    },
    {
      title: "Contact Us",
      items: [
        { title: "suppo@tech.email", href: "/" },
        { title: "affiliate@tech.com", href: "/" },
      ],
    },
  ];
  return (
    <div className="laptop:mt-20 mt-10 flex flex-col items-center justify-center border-neutral-subdued border-t">
      <div className="flex w-full laptop:max-w-[1128px] flex-wrap gap-4 laptop:gap-10 laptop:px-0 px-5 py-10">
        {footerItems.map((item) => (
          <FooterItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export { Footer };
