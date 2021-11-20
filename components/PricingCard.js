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

function PricingCard({ corner, tier, price, standard }) {
  return (
    <Box
      display={{ base: "none", sm: "block" }}
      borderRightRadius={corner === "right" && "6px"}
      _before={
        standard
          ? {
              color: "#E9DB4D",
              fontSize: "14px",
              fontWeight: "600",
              textAlign: "center",
              pos: "absolute",
              content: `"TOP SELLER"`,
              pt: "3px",
              width: "100%",
              left: "0",
              height: "30px",
              top: "-30px",
              borderTopRadius: "5px",
              bgColor: "secondary_green",
            }
          : ""
      }
      px="20px"
      py="20px"
      pos="relative"
      border="1px solid"
      borderColor="light_grey"
      w="25%"
      h={{ base: "0", sm: "80%", md: "74%" }}
      bgColor={standard ? "#D7EAD4" : "light_green"}
    >
      <Box d="flex" flexDir="column" justifyContent="space-between" h="100%">
        <VStack spacing="5px" alignItems="flex-start">
          <Text fontWeight="600" fontSize="25px" top="20px" left="15px">
            {tier}
          </Text>
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
  );
}

export default PricingCard;
