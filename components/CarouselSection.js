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
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";

function CarouselSection() {
  return (
    <Flex flexWrap="wrap" px="7%" mt="12%">
      <VStack
        mb={{ base: "60px", sm: "60px", md: "0" }}
        spacing="40px"
        mr="2%"
        alignItems="center"
        w={{ base: "100%", sm: "100%", md: "49%" }}
      >
        <VStack>
          <Text fontWeight="600" color="main_green" textAlign="center">
            SPECIAL COLLECTION
          </Text>
          <Text fontWeight="600" fontSize="35px" textAlign="center">
            Lorem ipsum dolor sit amet
          </Text>
          <Text fontSize="14px" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas sodales nisl venenatis consectetur. Nulla et mi felis.{" "}
          </Text>
        </VStack>
        <VStack />
        <Flex w="100%" flexWrap="wrap">
          <Box
            px="10px"
            py="20px"
            borderTop={{ base: "0", sm: "2px solid #E8E8E8" }}
            borderRight={{ base: "0", sm: "2px solid #E8E8E8" }}
            borderBottom="2px solid"
            borderColor="light_grey"
            w={{ base: "100%", sm: "50%", md: "50%" }}
          >
            <VStack>
              <AspectRatio maxW="100px" w="100%" ratio={1}>
                <Image alt="" src="../icon_feature2.png" />
              </AspectRatio>
              <Text fontWeight="600" textAlign="center">
                Feature Highlight
              </Text>
              <Text color="med_grey" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </VStack>
          </Box>
          <Box
            px="10px"
            py="20px"
            borderTop={{ base: "0", sm: "2px solid #E8E8E8" }}
            borderBottom="2px solid"
            borderColor="light_grey"
            w={{ base: "100%", sm: "50%", md: "50%" }}
          >
            <VStack>
              <AspectRatio maxW="100px" w="100%" ratio={1}>
                <Image alt="" src="../icon_feature4.png" />
              </AspectRatio>
              <Text fontWeight="600" textAlign="center">
                Feature Highlight
              </Text>
              <Text color="med_grey" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </VStack>
          </Box>
          <Box
            px="10px"
            py="20px"
            borderRight={{ base: "0", sm: "2px solid #E8E8E8" }}
            borderBottom="2px solid #E8E8E8"
            w={{ base: "100%", sm: "50%", md: "50%" }}
          >
            <VStack>
              <AspectRatio maxW="100px" w="100%" ratio={1}>
                <Image src="../icon_feature1.png" />
              </AspectRatio>
              <Text fontWeight="600" textAlign="center">
                Feature Highlight
              </Text>
              <Text color="med_grey" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </VStack>
          </Box>
          <Box
            px="10px"
            py="20px"
            borderBottom={{ base: "0", sm: "2px solid #E8E8E8" }}
            w={{ base: "100%", sm: "50%", md: "50%" }}
          >
            <VStack>
              <AspectRatio maxW="100px" w="100%" ratio={1}>
                <Image src="../icon_feature3.png" />
              </AspectRatio>
              <Text fontWeight="600" textAlign="center">
                Feature Highlight
              </Text>
              <Text color="med_grey" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </VStack>
      <Box w={{ base: "100%", sm: "100%", md: "49%" }}>
        <Carousel
          thumbWidth="100%"
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          dynamicHeight={false}
          renderItem={(children) => {
            return (
              <AspectRatio ratio={4 / 5} w="100%">
                {children}
              </AspectRatio>
            );
          }}
          renderThumbs={(children) =>
            children.map((thumb, index) => {
              return (
                <AspectRatio key={index} ratio={1}>
                  {thumb}
                </AspectRatio>
              );
            })
          }
        >
          <Image alt="" objectFit="cover" src="../carousel1.jpg" />

          <Image alt="" objectFit="cover" src="../carousel2.jpg" />

          <Image alt="" objectFit="cover" src="../carousel3.jpg" />

          <Image alt="" objectFit="cover" src="../carousel4.jpg" />
        </Carousel>
      </Box>
    </Flex>
  );
}

export default CarouselSection;
