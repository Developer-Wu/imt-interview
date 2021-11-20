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
} from "@chakra-ui/react";

function VidSection() {
  return (
    <Box
      mt="60px"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      py="10%"
      alignItems="center"
      justifyContent="center"
      d="flex"
      h="auto"
      bgImage="../videoBG.jpg"
      pos="relative"
    >
      <VStack zIndex={998} w="100%" maxW="300px">
        <Image w="70px" src="../icon_videoplay.png" />
        <Text
          textAlign="center"
          color="#FFF"
          fontWeight="600"
          fontSize={{ base: "20px", sm: "30px" }}
        >
          Introduction of a service or product
        </Text>
        <HStack>
          <Button
            _hover={{ bgColor: "hover_green" }}
            borderRadius="3px"
            bgColor="secondary_green"
            color="#FFF"
          >
            Learn more
          </Button>
          <Button
            _hover={{ opacity: "0.7" }}
            bgColor="rgba(0,0,0,0)"
            border="1px solid"
            borderRadius="3px"
            color="#FFF"
          >
            Contact Us
          </Button>
        </HStack>
      </VStack>

      <Box pos="absolute" bgColor="rgba(0,0,0,0.4)" w="100%" h="100%"></Box>
    </Box>
  );
}

export default VidSection;
