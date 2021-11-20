import {
  Heading,
  Box,
  Image,
  VStack,
  Text,
  UnorderedList,
  ListItem,
  HStack,
  Spacer,
  Flex,
  Button,
  AspectRatio,
  Divider,
} from "@chakra-ui/react";
import PricingCard from "./PricingCard";
import PricingMobile from "./PricingMobile";
function PricingSection() {
  return (
    <Box
      backgroundSize="cover"
      h={{ base: "100%", sm: "800px", md: "800px" }}
      w="100%"
      backgroundPosition="40% 90%"
      bgImage={{ base: "", sm: "../pricing.jpg" }}
      my="60px"
    >
      <VStack spacing="0">
        <Text fontWeight="600" color="main_green">
          SUBTITLE
        </Text>
        <Text fontWeight="600" fontSize="30px">
          Service Pricing
        </Text>
      </VStack>
      <Flex h="100%" pt="6%" px={{ base: "0", sm: "7%" }}>
        <Box
          display={{ base: "none", sm: "block", md: "block" }}
          borderLeftRadius="6px"
          bgColor="light_green"
          border="1px solid"
          borderColor="light_grey"
          w="25%"
          h={{ base: "0", sm: "80%", md: "74%" }}
        >
          <Box pos="relative" h="calc(35%)">
            <Text
              fontWeight="400"
              fontSize="14px"
              top="26px"
              left="20px"
              pos="absolute"
            >
              PLAN
            </Text>
          </Box>
          <Box pos="relative" h="39%">
            <Text
              fontWeight="400"
              fontSize="14px"
              top="26px"
              left="20px"
              pos="absolute"
            >
              PRICING
            </Text>
          </Box>
          <Box pos="relative" h="26%">
            <Text
              fontWeight="400"
              fontSize="14px"
              top="26px"
              left="20px"
              pos="absolute"
            >
              TOP FEATURES
            </Text>
          </Box>
        </Box>
        <PricingMobile />
        <PricingCard standard={false} price="299" tier="Premium" />
        <PricingCard standard={true} price="14" tier="Standard" />
        <PricingCard
          corner="right"
          standard={false}
          price="9"
          tier="Essentials"
        />
      </Flex>
    </Box>
  );
}

export default PricingSection;
