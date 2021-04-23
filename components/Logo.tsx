import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Box mt={4} ml={4}>
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="Just Decide" width={100} height={67} />
        </a>
      </Link>
    </Box>
  );
}
