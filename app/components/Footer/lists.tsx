import IconButton from "@/app/src/components/ui/IconButton/IconButton";

export const NEEDHELP = {
  title: "Need Help",
  list: ["Contact Us", "Track Order", "Returns & Refunds", "FAQ's", "Career"],
};

export const COMPANY = {
  title: "Company",
  list: ["About Us", "euphoria Blog", "euphoriastan", "Collaboration", "Media"],
};

export const MOREINFO = {
  title: "More Info",
  list: ["Term and Conditions", "Privacy Policy", "Shipping Policy", "Sitemap"],
};

export const LOCATION = {
  title: "Location",
  list: [
    "support@euphoria.in",
    "Eklingpura Chouraha, Ahmedabad Main Road",
    "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002",
  ],
};

export const BUTTONS = [
  {
    content: (
      <IconButton variant="white">
        <img src="/icons/facebook.svg" alt="icon facebook" />
      </IconButton>
    ),
    href: "/",
  },
  {
    content: (
      <IconButton variant="white">
        <img src="/icons/instagramm.svg" alt="icon instagramm" />
      </IconButton>
    ),
    href: "/",
  },
  {
    content: (
      <IconButton variant="white">
        <img src="/icons/twitterBlack.svg" alt="icon twitterBlack" />
      </IconButton>
    ),
    href: "/",
  },
  {
    content: (
      <IconButton variant="white">
        <span>in</span>
      </IconButton>
    ),
    href: "/",
  },
];
