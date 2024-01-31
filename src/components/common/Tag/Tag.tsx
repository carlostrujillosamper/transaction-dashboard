import { Tag as ChakraTag, TagLabel } from "@chakra-ui/react";

interface TagProps {
  label: string;
  color: string;
}
export function Tag({ label, color }: TagProps) {
  return (
    <ChakraTag colorScheme={color}>
      <TagLabel>{label}</TagLabel>
    </ChakraTag>
  );
}
