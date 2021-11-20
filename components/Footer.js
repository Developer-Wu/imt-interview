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
  Icon,
} from "@chakra-ui/react";

function Footer() {
  const categoryItems = [
    {
      id: 1,
      label: "Nutrition",
    },
    {
      id: 2,
      label: "Recipes",
    },
    {
      id: 3,
      label: "News & Trends",
    },
    {
      id: 4,
      label: "Lifestyle",
    },
    {
      id: 5,
      label: "Health",
    },
    {
      id: 6,
      label: "Beauty",
    },
  ];

  const whoItems = [
    {
      id: 1,
      label: "About OrgHive Community",
    },
    {
      id: 2,
      label: "Terms of Use",
    },
    {
      id: 3,
      label: "Privacy Policy",
    },
    {
      id: 4,
      label: "Content Policy",
    },
  ];

  const discoverItems = [
    {
      id: 1,
      label: "Create your account",
    },
    {
      id: 2,
      label: "OrgHive Marketplace:Ecommerce",
    },
    {
      id: 3,
      label: "OrgHive Marketing:China marketing",
    },
  ];

  const socialItems = [
    {
      id: 1,
      label: "LinkedIn",
      icon: "../logo_linkedin.png",
    },
    {
      id: 2,
      label: "Facebook",
      icon: "../facebook.png",
    },
    {
      id: 3,
      label: "Instagram",
      icon: "../logo_instagram.png",
    },
  ];

  return (
    <>
      <Box
        py="60px"
        d="flex"
        flexDir="column"
        alignItems="center"
        bgColor="#314249"
        w="100%"
        px={{ base: "10%", sm: "5%", md: "5%" }}
      >
        <Box
          d="flex"
          flexDir={{ base: "column", sm: "row", md: "row" }}
          justifyContent="space-between"
          w="100%"
          maxW="1200px"
          minH={{ base: "700px", sm: "0" }}
        >
          <VStack spacing="20px" color="#FFF" alignItems="flex-start">
            <Heading fontSize={{ base: "20px", sm: "20px", md: "25px" }}>
              Categories
            </Heading>
            <VStack spacing="7px" alignItems="flex-start">
              {categoryItems.map((item) => {
                return (
                  <Text
                    key={item.id}
                    fontSize={{ base: "12px", sm: "12px", md: "14px" }}
                  >
                    {item.label}
                  </Text>
                );
              })}
            </VStack>
          </VStack>
          <VStack spacing="20px" color="#FFF" alignItems="flex-start">
            <Heading fontSize={{ base: "20px", sm: "20px", md: "25px" }}>
              Who are we?
            </Heading>
            <VStack spacing="7px" alignItems="flex-start">
              {whoItems.map((item) => {
                return (
                  <Text
                    key={item.id}
                    fontSize={{ base: "12px", sm: "12px", md: "14px" }}
                  >
                    {item.label}
                  </Text>
                );
              })}
            </VStack>
          </VStack>
          <VStack spacing="20px" color="#FFF" alignItems="flex-start">
            <Heading fontSize={{ base: "20px", sm: "20px", md: "25px" }}>
              Discover OrgHive
            </Heading>
            <VStack spacing="7px" alignItems="flex-start">
              {discoverItems.map((item) => {
                return (
                  <Text
                    key={item.id}
                    fontSize={{ base: "12px", sm: "12px", md: "14px" }}
                  >
                    {item.label}
                  </Text>
                );
              })}
            </VStack>
          </VStack>
          <VStack spacing="20px" color="#FFF" alignItems="flex-start">
            <Heading fontSize={{ base: "20px", sm: "20px", md: "25px" }}>
              Social Websites
            </Heading>
            <VStack spacing="13px" alignItems="flex-start">
              {socialItems.map((item) => {
                return (
                  <HStack key={item.id}>
                    <Image alt="" w="18px" src={item.icon} />
                    <Text fontSize={{ base: "12px", sm: "12px", md: "14px" }}>
                      {item.label}
                    </Text>
                  </HStack>
                );
              })}
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Box
        d="flex"
        alignItems="center"
        py="20px"
        bgColor="#112A31"
        w="100%"
        h="30px"
      >
        <Text w="100%" textAlign="center" color="#FFF">
          © 2021 OrgHive 1.0.109
        </Text>
      </Box>
    </>
  );
}

export default Footer;
