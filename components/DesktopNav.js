import {
  Heading,
  Box,
  Flex,
  Text,
  AspectRatio,
  Image,
  Icon,
  UnorderedList,
  ListItem,
  HStack,
  Spacer,
  Divider,
} from "@chakra-ui/react";

import { FiChevronDown } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

function DesktopNav({ navItems, categoryItems }) {
  return (
    <Box h="auto" w="100%" display={{ base: "none", md: "inline" }}>
      <Box
        pb="10px"
        h="100%"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        d="flex"
        px={{ base: "30px", md: "30px", lg: "0", xl: "0" }}
        pos="relative"
      >
        <Divider
          pos="absolute"
          bottom="0"
          w="100vw"
          left="50%"
          transform="translate(-50%,0)"
          borderWidth="1.5px"
          borderColor="light_grey"
          bgColor="light_grey"
        />
        <Image w="120px" objectFit="contain" src="../main_logo.png" />
        <Spacer />
        <UnorderedList listStyleType="none" textDecor="none">
          <HStack spacing="30px">
            {navItems.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </HStack>
        </UnorderedList>
        <HStack ml="20px">
          <Box
            borderRadius="full"
            bgColor="light_grey"
            pos="relative"
            w="42px"
            h="42px"
          >
            <Icon
              fontSize="20px"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%)"
              as={AiOutlineSearch}
            />
          </Box>
          <Box
            borderRadius="full"
            bgColor="light_grey"
            pos="relative"
            w="42px"
            h="42px"
          >
            <Icon
              fontSize="18px"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%)"
              as={BsGlobe2}
            />
          </Box>
          <Box
            h="42px"
            w="max-content"
            borderRadius="full"
            px="13px"
            py="10px"
            border="2px solid"
            color="#FFF"
            bgColor="secondary_green"
            d="flex"
            alignItems="center"
          >
            <Text fontWeight="500" fontSize="13px">
              Write a blog
            </Text>
          </Box>
          <Box
            h="42px"
            w="max-content"
            borderRadius="full"
            px="5px"
            py="5px"
            bgColor="light_grey"
            d="flex"
            alignItems="center"
          >
            <Flex alignItems="center" w="100%">
              <AspectRatio w="30px" maxW="50px" ratio={1}>
                <Image alt="" borderRadius="full" src="../profile_thumb.jpg" />
              </AspectRatio>
              <Text fontWeight="600" fontSize="14px" mx="5px">
                Carmen
              </Text>
              <Icon as={FiChevronDown} />
            </Flex>
          </Box>
        </HStack>
      </Box>
      <Box
        pt="10px"
        h="100%"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        d="flex"
        px={{ md: "20px", lg: "0" }}
      >
        <UnorderedList
          d="flex"
          w="100%"
          listStyleType="none"
          textDecor="none"
          flexWrap="wrap"
        >
          {categoryItems.map((item) => {
            switch (item.border) {
              case "r":
                return (
                  <ListItem
                    d="flex"
                    justifyContent="center"
                    px="30px"
                    borderRight="2px solid"
                    borderColor="light_grey"
                    key={item.item}
                  >
                    <Text>{item.item}</Text>
                  </ListItem>
                );
              case "l":
                return (
                  <ListItem
                    d="flex"
                    justifyContent="center"
                    px="30px"
                    key={item.item}
                  >
                    <Text>{item.item}</Text>
                  </ListItem>
                );
            }
          })}
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default DesktopNav;
