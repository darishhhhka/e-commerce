import Button from "@/app/src/components/ui/button/Button";

export const LINKS = [
  { content: "Shop", href: "/" },
  { content: "Men", href: "/" },
  { content: "Women", href: "/" },
  { content: "Combos", href: "/" },
  { content: "Joggers", href: "/" },
];

export const LINKSBUTTONS = [
  {
    content: (
      <Button variantSize="small">
        <img src="/icons/heart.svg" alt="heart icon" />
      </Button>
    ),
    href: "/",
  },
  {
    content: (
      <Button variantSize="small">
        <img src="/icons/men.svg" alt="heart icon" />
      </Button>
    ),
    href: "/",
  },
  {
    content: (
      <Button variantSize="small">
        <img src="/icons/cart.svg" alt="heart icon" />
      </Button>
    ),
    href: "/",
  },
];
