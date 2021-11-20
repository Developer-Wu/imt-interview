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

function BlogCard({ image }) {
  return (
    <Box
      boxShadow="0px 0px 30px -5px rgba(0,0,0,0.3)"
      pos="relative"
      _after={{
        content: `"BLOG CATEGORY"`,
        pos: "absolute",
        top: 0,
        right: 0,
        bgColor: "light_green",
        px: "10px",
        py: "3px",
        fontSize: "12px",
        fontWeight: "600",
        color: "main_green",
        borderBottomLeftRadius: "4px",
      }}
      w="calc(100% / 3)"
      h="auto"
      mx="8px"
    >
      <AspectRatio w="100%" ratio={16 / 11}>
        <Image src={`../carousel${image}.jpg`} />
      </AspectRatio>
      <VStack spacing="12px" w="100%" pt="40px" pb="20px" px="30px">
        <Text fontWeight="600">
          Lorem ipsum dolor sit amet, consetrtur sadipscing elitr, sed
        </Text>
        <HStack w="100%">
          <AspectRatio ratio={1} w="40px">
            <Image borderRadius="full" src="../profile_thumb.jpg" />
          </AspectRatio>
          <Text color="#2971A3" fontWeight="600" fontSize="12px">
            Author&apos;s Name
            <Text color="med_grey" fontWeight="400" as="span">
              {" "}
              on
            </Text>
            <Text color="med_grey" as="span">
              {" "}
              July 07, 2017
            </Text>
          </Text>
        </HStack>
        <Divider />
        <Text fontSize="14px" color="med_grey">
          Lorem ipsum dolor sit amet, consetrtur sadipscing elitr, sed Lorem
          ipsum dolor sit amet, consetrtur sadipscing elitr, sed
        </Text>
      </VStack>
    </Box>
  );
}

export default BlogCard;
