import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function StoresButton() {
  const { stores } = useStores();
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-4">
      {stores.map(({ title, href, src }) => (
        <Button
          key={title}
          asChild
          className="bg-dark rounded-lg py-3 w-[211px] px-4 justify-start hover:bg-dark/80 border border-border"
        >
          <Link href={href}>
            <Image
              src={src}
              width={211}
              height={62}
              alt="store"
              className="w-[152px] h-[36px]"
            />
          </Link>
        </Button>
      ))}
    </div>
  );
}

function useStores() {
  const stores = [
    {
      title: "apple",
      src: "/icons/apple.png",
      href: "#",
    },
    {
      title: "google",
      src: "/icons/google.png",
      href: "#",
    },
  ];

  return {
    stores,
  };
}
