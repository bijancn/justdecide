import { chakra } from "@chakra-ui/react";

export default function TextHighlight(props) {
  return (
    <chakra.span {...props} color="red.500">
      {props.children}
    </chakra.span>
  );
}
