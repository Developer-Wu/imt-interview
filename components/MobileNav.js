import {
  Box,
  Divider,
  Icon,
  HStack,
  UnorderedList,
  ListItem,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsPerson, BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function MobileNav({ categoryItems, navItems }) {
  const [categoryActive, setCategoryActive] = useState(false);
  function handleCategoryChange(e) {
    e.preventDefault();
    setCategoryActive(!categoryActive);
  }

  const [navActive, setNavActive] = useState(false);

  return (
    <Box display={{ base: "block", md: "none" }}>
      <Box
        visibility={navActive ? "visible" : "hidden"}
        top="0"
        zIndex={998}
        pos="fixed"
        w="100vw"
        h="100vh"
        bgColor="rgba(0,0,0,0.3)"
        opacity={navActive ? "1" : "0"}
        transition="opacity 300ms, visibility 600ms 0s"
      >
        <Box
          top="50%"
          transform={
            navActive ? "translate(0 , -50%)" : "translate(-100%, -50%)"
          }
          pos="absolute"
          h="100vh"
          w="100vw"
          maxW={{ base: "", sm: "350px" }}
          pt="10%"
          bgColor="light_green"
          transition="transform 500ms"
        >
          <Button
            variant="ghost"
            onClick={() => setNavActive(false)}
            pos="absolute"
            top="10px"
            right="10px"
          >
            <Icon fontSize="20px" as={IoMdClose} />
          </Button>
          <UnorderedList m="0" listStyleType="none">
            <VStack spacing="0" alignItems="flex-start">
              {navItems.map((item) => {
                return (
                  <ListItem
                    py="10px"
                    _hover={{ bgColor: "secondary_green", color: "#FFF" }}
                    borderColor="secondary_green"
                    w="100%"
                    color="#000"
                    key={item}
                  >
                    <Text pl="30px">{item}</Text>
                  </ListItem>
                );
              })}
            </VStack>
          </UnorderedList>
        </Box>
      </Box>
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
        <Box w="100px" border="2px solid" h="30px"></Box>
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
        <HStack>
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
              fontSize="20px"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%,-50%)"
              as={BsPerson}
            />
          </Box>
          <Icon
            _hover={{ opacity: "0.6", cursor: "pointer" }}
            onClick={setNavActive}
            fontSize="30px"
            as={HiOutlineMenuAlt3}
            transition="opacity 200ms"
          />
        </HStack>
      </Box>
      <Box
        pt="10px"
        d="flex"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          pos="relative"
          onClick={(e) => handleCategoryChange(e)}
          h="100%"
          as="button"
        >
          <HStack alignItems="center" justifyContent="center">
            <Text fontWeight="500">CATEGORIES</Text>
            <Icon as={BsChevronDown} />
          </HStack>

          <Box
            borderTop="2px solid"
            borderColor="light_grey"
            visibility={categoryActive ? "visible" : "hidden"}
            d="flex"
            justifyContent="center"
            alignItems="center"
            left="50%"
            transform={
              categoryActive
                ? "translate(-50%, -1%)"
                : "translate(-50%,-48%) scale(1,0.1)"
            }
            transition="transform 150ms, visibility 0ms"
            transitionDelay="0s, 25ms !important"
            w="100vw"
            pos="absolute"
            top="45px"
            bgColor="#FFF"
          >
            <UnorderedList
              flexWrap="wrap"
              w="100%"
              d="flex"
              alignItems="center"
              justifyContent="center"
              listStyleType="none"
              m="0"
            >
              {categoryItems.map((item) => {
                return (
                  <ListItem w="100%" key={item.item}>
                    <Box
                      py="8px"
                      w="100%"
                      borderBottom="2px solid"
                      borderColor="light_grey"
                    >
                      {item.item}
                    </Box>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MobileNav;
