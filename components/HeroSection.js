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
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function HeroSection() {
  const [heroMenu, setHeroMenu] = useState(false);
  const heroItems = [
    {
      label: "Home",
      active: true,
    },
    {
      label: "About Us",
      active: false,
    },
    {
      label: "Products",
      active: false,
    },
    {
      label: "Service",
      active: false,
    },
    {
      label: "Gallery",
      active: false,
    },
    {
      label: "Contact",
      active: false,
    },
  ];
  return (
    <Box
      d="flex"
      flexDir="column"
      justifyContent="center"
      pos="relative"
      h="600px"
      w="100%"
      alignItems="center"
      bgColor="main_green"
    >
      <Box
        borderTopRadius="10px"
        boxShadow="0px -10px 30px -5px rgba(0,0,0,0.5)"
        maxW="1200px"
        pos="absolute"
        top="15%"
        h="85%"
        d="flex"
        flexWrap="wrap"
        w={{ base: "85%", sm: "95%", md: "100%", lg: "100%" }}
      >
        <Box
          borderLeftRadius="10px"
          bg={{
            base: "linear-gradient(to right,rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 65%)",
            sm: "linear-gradient(to right,rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)",
            md: "linear-gradient(to right,rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%)",
          }}
          pos="absolute"
          w="100%"
          h="100%"
        ></Box>
        <Box
          borderLeftRadius="10px"
          bgColor="secondary_green"
          h="100%"
          w="30%"
          display={{ base: "none", sm: "block", md: "block" }}
        ></Box>
        <Image
          objectPosition="bottom"
          borderRightRadius="10px"
          borderLeftRadius={{ base: "10px", sm: "0", md: "0" }}
          alt=""
          objectFit="cover"
          h="100%"
          w={{ base: "100%", sm: "70%", md: "70%" }}
          src="../hero.jpg"
        />
        <VStack
          spacing="0px"
          left="10%"
          top="50%"
          transform="translate(0, calc(-50% - 50px))"
          alignItems="flex-start"
          maxW={{ base: "300px", sm: "400px" }}
          pos="absolute"
        >
          <Text
            fontSize={{ base: "14px", sm: "16px" }}
            fontWeight="500"
            letterSpacing="2px"
            color="#FFF"
          >
            SPECIAL COLLECTION
          </Text>
          <Heading
            fontSize={{ base: "35px", sm: "45px" }}
            letterSpacing="0px"
            fontWeight="500"
            color="#FFF"
          >
            Introduction of a service or product
          </Heading>
        </VStack>
        <Box
          w="100%"
          bottom="0"
          pos="absolute"
          bgColor="third_green"
          h="70px"
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          px="7%"
        >
          <Box
            boxShadow="0px 5px 30px rgba(0,0,0,0.5)"
            borderRadius="10px"
            w="250px"
            mr="30px"
            p="10px"
            bgColor="#FFF"
          >
            <Box
              borderRadius="5px"
              border="2px solid"
              borderColor="light_grey"
              p="20px"
            >
              <VStack spacing="0" alignItems="flex-start">
                <Text fontSize="11px" color="main_green" fontWeight="600">
                  ORGANIC COMPANY
                </Text>
                <Text fontSize="20px" color="main_green" fontWeight="600">
                  COMPANY LOGO
                </Text>
              </VStack>
            </Box>
          </Box>
          <Box
            display={{ base: "block", sm: "block", md: "none" }}
            pos="absolute"
            top="80px"
            border="1px solid"
            borderColor="light_grey"
            w="100%"
            h="auto"
            right="0"
            opacity={heroMenu ? 1 : 0}
            visibility={heroMenu ? "visible" : "hidden"}
            transition="opacity 300ms, visibility 300ms 0s"
            bgColor="#FFF"
            borderRadius="5px"
            boxShadow="0px 5px 30px rgba(0,0,0,0.5)"
          >
            <UnorderedList
              m="0"
              display="block"
              listStyleType="none"
              color="#000"
            >
              {heroItems.map((item) => {
                switch (item.active) {
                  case true:
                    return (
                      <ListItem
                        _hover={{
                          cursor: "pointer",
                          bgColor: "secondary_green",
                          color: "#FFF",
                        }}
                        borderBottom="1px solid"
                        borderColor="light_grey"
                        py="10px"
                        fontSize="14px"
                        fontWeight="600"
                        key={item.label}
                      >
                        <Text pl="10px">{item.label}</Text>
                      </ListItem>
                    );
                  case false:
                    return (
                      <ListItem
                        _hover={{
                          cursor: "pointer",
                          bgColor: "secondary_green",
                          color: "#FFF",
                        }}
                        borderBottom="1px solid"
                        borderColor="light_grey"
                        py="10px"
                        fontSize="14px"
                        fontWeight="400"
                        key={item.label}
                      >
                        <Text pl="10px">{item.label}</Text>
                      </ListItem>
                    );
                }
              })}
            </UnorderedList>
          </Box>
          <UnorderedList
            display={{ base: "none", md: "block" }}
            listStyleType="none"
            color="#FFF"
          >
            <HStack spacing="30px">
              {heroItems.map((item) => {
                switch (item.active) {
                  case true:
                    return (
                      <ListItem
                        fontSize="14px"
                        fontWeight="600"
                        key={item.label}
                      >
                        {item.label}
                      </ListItem>
                    );
                  case false:
                    return (
                      <ListItem
                        fontSize="14px"
                        fontWeight="400"
                        key={item.label}
                      >
                        {item.label}
                      </ListItem>
                    );
                }
              })}
            </HStack>
          </UnorderedList>
          <Spacer />
          <Box
            display={{ base: "none", md: "block" }}
            px="15px"
            py="5px"
            border="1px solid"
            borderColor="#FFF"
            color="#FFF"
            fontWeight="600"
          >
            Contact Us
          </Box>
          <Box
            display={{ base: "block", md: "none" }}
            border="2px solid"
            borderColor="#FFF"
            borderRadius="5px"
            w="50px"
            pos="relative"
            h="45px"
            _hover={{ cursor: "pointer", opacity: "0.6" }}
            transition="all 0.3s"
            onClick={() => setHeroMenu(!heroMenu)}
          >
            <Icon
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="40px"
              color="#FFF"
              as={IoMdMenu}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
