import { Image, Box, Text } from "@chakra-ui/react";
import VISA from "../../assets/visa-svgrepo-com.svg";
import AMEX from "../../assets/amex-svgrepo-com.svg";
import MASTERCARD from "../../assets/mastercard-svgrepo-com.svg";

export function CreditCardLogo({ creditCard, lastFourDigits }: { creditCard: string, lastFourDigits: number }) {
  switch (creditCard) {
    case "visa":
      return (<Box
        background={
          "linear-gradient(90deg, rgba(238, 255, 143, 1),rgba(143,155,255,1))"
        }
        padding={5}
        rounded={4}
      >
        <Image src={VISA} alt="Visa" boxSize={20} />
        <Text fontSize="2xl" fontWeight="bold">
          xxxx xxxx xxxx {lastFourDigits}
        </Text>
        </Box>)
    case "amex":
      return (
        <Box
          background={
            "linear-gradient(90deg, rgba(235, 143, 255, 1), rgba(255, 186, 143, 1))"
          }
          padding={5}
          rounded={4}
        >
          <Image src={AMEX} alt="Amex" boxSize={20} />
          <Text fontSize="2xl" fontWeight="bold">
            xxxx xxxx xxxx {lastFourDigits}
          </Text>
        </Box>
      );
    case "mastercard":
      return (
        <Box
          background={
            "linear-gradient(90deg, rgba(143, 242, 255, 1), rgba(154, 143, 255, 1))"
          }
          padding={5}
          rounded={4}
        >
          <Image src={MASTERCARD} alt="Mastercard" boxSize={20} />
          <Text fontSize="2xl" fontWeight="bold">
            xxxx xxxx xxxx {lastFourDigits}
          </Text>
        </Box>
      );
    default:
      return null;
  }
}
