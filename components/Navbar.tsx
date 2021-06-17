import { Box, Popover, PopoverTrigger, Stack } from "@chakra-ui/react";
import React from "react";
import JDLink from "./basics/JDLink";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "How it works",
  //   href: "/how-it-works",
  // },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export default function Navbar() {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <JDLink
            p={5}
            href={navItem.href ?? "#"}
            color="gray.600"
            _hover={{ color: "#e53e3e" }}
          >
            {navItem.label}
          </JDLink>
        </Box>
      ))}
    </Stack>
  );
}
