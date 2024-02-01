import { Image } from "@chakra-ui/image";
import BITCOIN from "../../assets/bitcoin-btc-logo-full.svg";
import ETHEREUM from "../../assets/ethereum-eth-logo-full-horizontal.svg";
import DOGECOIN from "../../assets/dogecoin-doge-logo.svg";
import SOLANA from "../../assets/solana-sol-logo-horizontal.svg";

export function CryptoLogo({ coin }: { coin: string }) {
  switch (coin) {
    case "bitcoin":
      return <Image src={BITCOIN} alt="BitCoin" />;
    case "ethereum":
      return <Image src={ETHEREUM} alt="Ethereum" />;
    case "dogecoin":
      return <Image src={DOGECOIN} alt="Dogecoin" boxSize={6} />;
    case "solana":
      return <Image src={SOLANA} alt="Solana" />;
    default:
      return null;
  }
}
