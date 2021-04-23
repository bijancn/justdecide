import { Link } from "@chakra-ui/layout";
import NextLink from "next/link";

export default function JDLink(props) {
  return (
    <NextLink as={props.href} {...props} passHref={true}>
      <Link _hover={{ color: "red.500" }}>{props.children}</Link>
    </NextLink>
  );
}
