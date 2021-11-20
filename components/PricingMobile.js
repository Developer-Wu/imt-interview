import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import MobilePricingCard from "./MobilePricingCard";
import { useState } from "react";

function PricingMobile() {
  const [priceActive, setPriceActive] = useState("Premium");
  return (
    <Box display={{ base: "block", sm: "none" }}>
      <MobilePricingCard
        setPriceActive={setPriceActive}
        priceActive={priceActive}
        price="299"
        tier="Premium"
      />
      <MobilePricingCard
        setPriceActive={setPriceActive}
        priceActive={priceActive}
        price="14"
        tier="Standard"
      />
      <MobilePricingCard
        setPriceActive={setPriceActive}
        priceActive={priceActive}
        price="9"
        tier="Essentials"
      />
    </Box>
  );
}
export default PricingMobile;
