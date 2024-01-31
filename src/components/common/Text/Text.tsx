import { Text as ChakraText } from '@chakra-ui/react';

interface TextProps {
    content: string;
    weight: number;
}
export function Text({ content, weight }: TextProps) {
    return <ChakraText fontWeight={weight}>{content}</ChakraText>;
}