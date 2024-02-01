import { Image } from "@chakra-ui/image";
import BITCOIN from "../../assets/bitcoin-btc-logo-full.svg";
import ETHEREUM from "../../assets/ethereum-eth-logo-full-horizontal.svg";
import DOGECOIN from "../../assets/dogecoin-doge-logo.svg";
import SOLANA from "../../assets/solana-sol-logo-horizontal.svg";
import { Coin } from "./types";

export function CryptoLogo({ coin }: { coin: Coin }) {
  switch (coin) {
    case Coin.BITCOIN:
      return <Image src={BITCOIN} alt="BitCoin" />;
    case Coin.ETHEREUM:
      return <Image src={ETHEREUM} alt="Ethereum" />;
    case Coin.DOGECOIN:
      return <Image src={DOGECOIN} alt="Dogecoin" boxSize={6} />;
    case Coin.SOLANA:
      return <Image src={SOLANA} alt="Solana" />;
    default:
      return null;
  }
}
