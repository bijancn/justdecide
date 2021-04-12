import Image from "next/image";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Box mt="0">
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="Just Decide" width={100} height={67} />
        </a>
      </Link>
    </Box>
  );
}
