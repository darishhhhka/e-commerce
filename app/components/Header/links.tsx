import IconButton from "@/app/src/components/ui/IconButton/IconButton";

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
      <IconButton variant="grey">
        <img src="/icons/heart.svg" alt="heart icon" />
      </IconButton>
    ),
    href: "/",
  },
  {
    content: (
      <IconButton variant="grey">
        <img src="/icons/men.svg" alt="heart icon" />
      </IconButton>
    ),
    href: "/",
  },
  {
    content: (
      <IconButton variant="grey">
        <img src="/icons/cart.svg" alt="heart icon" />
      </IconButton>
    ),
    href: "/",
  },
];
