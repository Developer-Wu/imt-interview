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
import { Carousel } from "react-responsive-carousel";

function PlantSection() {
  return (
    <Box display={{ base: "none", sm: "block" }} my="60px">
      <Box pb="60px">
        <Box alignItems="center" d="flex" px="7%">
          <VStack spacing="-5px" minW="300px" alignItems="flex-start">
            <Text color="main_green" fontSize="14px" fontWeight="600">
              SPECIAL COLLECTION
            </Text>
            <Text fontSize="28px" fontWeight="600">
              Lorem ipsum dolor sit
            </Text>
          </VStack>
          <Divider border="2px solid" borderColor="light_grey" mt="20px" />
          <Button
            ml="20px"
            mt="20px"
            fontSize="12px"
            bgColor="secondary_green"
            border="1px solid"
            borderRadius="3px"
            color="#FFF"
            px="50px"
            py="0"
            _hover={{ bgColor: "hover_green" }}
          >
            VIEW MORE
          </Button>
        </Box>
      </Box>
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={20}
        showThumbs={false}
        showStatus={false}
        renderItem={(children) => {
          return (
            <VStack spacing="22px" h="auto" mx="7px" alignItems="flex-start">
              <Box w="100%" bgColor="light_green">
                <AspectRatio ratio={1} w="100%">
                  {children}
                </AspectRatio>
              </Box>
              <VStack spacing="-2px" alignItems="flex-start">
                <Text
                  fontSize={{ base: "14px", sm: "14px", md: "16px" }}
                  textAlign="left"
                  fontWeight="600"
                >
                  Plant Product Name
                </Text>
                <Text
                  fontSize={{ base: "14px", sm: "14px", md: "16px" }}
                  color="main_green"
                  fontWeight="600"
                >
                  HK$65.00
                </Text>
              </VStack>
            </VStack>
          );
        }}
        renderArrowNext={(clickHandler) => (
          <Box
            _hover={{ cursor: "pointer" }}
            onClick={clickHandler}
            pos="absolute"
            h="25%"
            top="50%"
            transform="translate(0, calc(-50% - 10px))"
            right="0"
            boxShadow="10px 0px 50px 20px rgba(67,156,51,0.7)"
          >
            <Box
              boxShadow="10px 0px 30px -5px rgba(67,156,51,0.5)"
              bgColor="#FFF"
              borderRadius="full"
              p="10px"
              pos="absolute"
              top="50%"
              transform="translate(0, calc(-50% - 10px))"
              right="30px"
              w="40px"
              h="40px"
            >
              <Image src="../icon_arrowright.png" />
            </Box>
          </Box>
        )}
        renderArrowPrev={(clickHandler) => (
          <Box
            zIndex={997}
            _hover={{ cursor: "pointer" }}
            onClick={clickHandler}
            pos="absolute"
            h="25%"
            top="50%"
            transform="translate(0, calc(-50% - 10px))"
            left="0"
            boxShadow="10px 0px 50px 20px rgba(67,156,51,0.7)"
          >
            <Box
              boxShadow="10px 0px 30px -5px rgba(67,156,51,0.5)"
              bgColor="#FFF"
              borderRadius="full"
              p="10px"
              pos="absolute"
              top="50%"
              transform="translate(0, calc(-50% - 10px))"
              left="30px"
              w="40px"
              h="40px"
            >
              <Image src="../icon_arrowleft.png" />
            </Box>
          </Box>
        )}
      >
        <Image alt="" objectFit="cover" src="../plant1.png" />

        <Image alt="" objectFit="cover" src="../plant2.png" />

        <Image alt="" objectFit="cover" src="../plant3.png" />

        <Image alt="" objectFit="cover" src="../plant4.png" />
        <Image alt="" objectFit="cover" src="../plant1.png" />

        <Image alt="" objectFit="cover" src="../plant2.png" />

        <Image alt="" objectFit="cover" src="../plant3.png" />

        <Image alt="" objectFit="cover" src="../plant4.png" />
      </Carousel>
    </Box>
  );
}

export default PlantSection;
