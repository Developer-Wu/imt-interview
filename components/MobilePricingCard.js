import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  UnorderedList,
  ListItem,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
function MobilePricingCard({ setPriceActive, priceActive, tier, price }) {
  const a = "hello";
  return (
    <>
      <Box
        visibility={priceActive === tier ? "visible" : "hidden"}
        bgColor="light_green"
        w="100%"
        h={priceActive === tier ? "500px" : "0"}
        transition="visibility 500ms 0s, height 300ms"
      >
        <Box
          d="flex"
          justifyContent="space-between"
          flexDir="column"
          h="100%"
          minH={priceActive === tier ? "500px" : "0"}
          transformOrigin="0 0"
          transform={priceActive === tier ? "" : "scale(1, 0)"}
          transition="transform 300ms, height 300ms"
          py="40px"
          px={{ base: "10%" }}
        >
          <VStack alignItems="flex-start">
            <Flex w="100%" justifyContent="space-between">
              <Text fontWeight="600">{tier}</Text>
              <Icon as={BsChevronUp} onClick={() => setPriceActive("")} />
            </Flex>

            <Text fontWeight="400" fontSize="12px" top="20px" left="15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque bibendum, mauris in condimentum ultrices, dui lacus
              fringilla tortor,
            </Text>
          </VStack>
          <VStack>
            <VStack spacing="-10px">
              <Text fontSize="16px" fontWeight="600">
                Starting
              </Text>
              <Box
                fontSize="40px"
                pos="relative"
                _before={{
                  fontWeight: "500",
                  fontSize: "25px",

                  pos: "absolute",
                  top: "7px",
                  left: "-18px",
                  content: `"$"`,
                }}
                _after={{
                  fontWeight: "500",
                  fontSize: "14px",

                  pos: "absolute",
                  top: "10px",
                  right: "-25px",
                  content: `".01"`,
                }}
              >
                {price}
              </Box>
              <Box fontSize="12px">A month</Box>
            </VStack>

            <Button
              _hover={{ bgColor: "hover_green" }}
              borderRadius="0px"
              bgColor="secondary_green"
              color="#FFF"
              w="100%"
              h="35px"
              fontSize="14px"
            >
              Select
            </Button>
            <Text
              textAlign="center"
              color="secondary_green"
              fontSize="12px"
              textDecor="underline"
            >
              Learn more about this plan
            </Text>
          </VStack>
          <VStack spacing="5px" fontSize="14px" alignItems="flex-start">
            <Text fontWeight="600">Lorem ipsum dolor</Text>
            <UnorderedList
              listStylePos="inside"
              fontSize="12px"
              w="100%"
              boxSizing="border-box"
            >
              <ListItem>Lorem ipsum dolar sit amet.</ListItem>
              <ListItem>Lorem ipsum dolar sit amet.</ListItem>
              <ListItem>Lorem ipsum dolar sit amet.</ListItem>
              <ListItem>Lorem ipsum dolar sit amet.</ListItem>
            </UnorderedList>
          </VStack>
        </Box>
      </Box>

      <Box
        visibility={priceActive === tier ? "hidden" : "visible"}
        justifyContent="space-between"
        d="flex"
        px="7%"
        border={priceActive === tier ? "" : "1px solid"}
        borderColor="#CDD9CA"
        bgColor="#DFEBDD"
        h={priceActive === tier ? "0" : "70px"}
        alignItems="center"
      >
        <Text fontWeight="600">{tier}</Text>
        <Icon as={BsChevronDown} onClick={() => setPriceActive(tier)} />
      </Box>
    </>
  );
}

export default MobilePricingCard;
