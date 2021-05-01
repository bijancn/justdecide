import { HamburgerIcon } from "@chakra-ui/icons";
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import LinkedButton from "./basics/LinkedButton";

function BurgerMenu() {
  const router = useRouter();

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          variant="ghost"
          icon={<HamburgerIcon />}
          display={{ base: "inherit", md: "none" }}
          transition="all 0.2s"
          boxSize="67px"
          mt={6}
          mr={2}
          _focus={{ boxShadow: "outline" }}
        />
        <MenuList>
          <MenuItem onClick={(_) => router.push("/how-it-works")}>
            How it works
          </MenuItem>
          <MenuItem onClick={(_) => router.push("/pricing")}>Pricing</MenuItem>
          <MenuDivider />
          <MenuItem onClick={(_) => router.push("/create")}>Start Now</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default function Header() {
  return (
    <HStack justify="space-between" width="100vw" maxWidth="1260px">
      <Logo />
      <BurgerMenu />
      <HStack spacing={5} pr={5} display={{ base: "none", md: "inherit" }}>
        <Navbar />
        <LinkedButton href="/create">Start now</LinkedButton>
      </HStack>
    </HStack>
  );
}
