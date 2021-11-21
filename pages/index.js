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
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import VidSection from "../components/VidSection";
import CarouselSection from "../components/CarouselSection";
import PlantSection from "../components/PlantSection";
import PricingSection from "../components/PricingSection";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box
      bgColor="light_grey"
      d="flex"
      flexDir="column"
      alignItems="center"
      w="100vw"
      pos="relative"
      top="0"
      overflowY="auto"
    >
      <Box
        bgColor="#FFF"
        d="flex"
        justifyContent="center"
        w="100%"
        h="100%"
        top="0"
        pos="sticky"
        zIndex={999}
      >
        <Box py="20px" top="0" h="100%" maxW="1200px" w="100%">
          <Navbar />
        </Box>
      </Box>

      <HeroSection />
      <Box
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        h="auto"
        w="100%"
      >
        <Box
          borderBottomRadius="10px"
          mb={{ base: "0", sm: "0", md: "60px" }}
          bgColor="#FFF"
          boxShadow="0px -10px 30px -5px rgba(0,0,0,0.5)"
          w="100%"
          maxW="1200px"
        >
          <CarouselSection />
          <VidSection />
          <PlantSection />
          <Flex h="auto" flexWrap="wrap">
            <Image
              alt=""
              w={{ base: "100%", sm: "50%" }}
              objectFit="cover"
              src="hero.jpg"
            />
            <Box
              px="8%"
              py={{ base: "20%", sm: "10.3%" }}
              w={{ base: "100%", sm: "50%" }}
              h="100%"
              bgColor="secondary_green"
            >
              <Flex
                h="100%"
                justifyContent="space-between"
                flexDir="column"
                color="#FFF"
              >
                <VStack spacing="0" alignItems="flex-start">
                  <Text fontWeight="600">SPECIAL COLLECTION</Text>
                  <Text lineHeight="37px" fontSize="30px" fontWeight="600">
                    Lorem ipsum dolor sit amet, consetrtur sadipscing elitr
                  </Text>
                </VStack>

                <VStack spacing="20px" alignItems="flex-start">
                  <Text fontSize="14px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque bibendum, mauris in condimentum ultrices, dui
                    lacus fringilla tortor,
                  </Text>
                  <Button
                    _hover={{ opacity: "0.7" }}
                    bgColor="rgba(0,0,0,0)"
                    border="1px solid"
                    borderRadius="3px"
                    color="#FFF"
                    w="180px"
                    h="50px"
                    fontSize="14px"
                  >
                    LEARN MORE
                  </Button>
                </VStack>
              </Flex>
            </Box>
          </Flex>

          <PricingSection />

          <Box
            w="100%"
            mb="120px"
            d="flex"
            px={{ base: "0%", sm: "0%", md: "0%", lg: "7%" }}
            justifyContent="center"
            alignItems="center"
            pos="relative"
          >
            <VStack spacing="50px" w="100%">
              <VStack spacing="0" w="100%" maxW="500px">
                <Text color="main_green" fontWeight="600">
                  SPECIAL COLLECTION
                </Text>
                <Text
                  lineHeight="33px"
                  fontWeight="600"
                  fontSize="30px"
                  textAlign="center"
                >
                  Lorem ipsum dolor sit amet, consetrtur sadipscing elitr, sed
                </Text>
              </VStack>
              <Box
                h="600px"
                px={{ base: "0", sm: "0", md: "30px" }}
                overflowX="auto"
                w="100%"
              >
                <Flex pos="relative" h="500px" minW="900px" w="100%">
                  <BlogCard image="2" />
                  <BlogCard image="3" />
                  <BlogCard image="4" />
                </Flex>
              </Box>
            </VStack>
          </Box>
          <Flex
            bgColor="#0A891E"
            w="100%"
            flexWrap="wrap"
            justifyContent="center"
            borderRadius={{ base: "0", sm: "0", md: "10px" }}
            h="auto"
          >
            {Array.from(Array(6).keys()).map((index) => {
              switch (index) {
                case 0:
                  return (
                    <Box
                      p={{ base: "0%", sm: "4%", md: "0" }}
                      w={{
                        base: "40%",
                        sm: "calc(100% / 3)",
                        md: "calc(100% / 6)",
                      }}
                    >
                      <Image
                        alt=""
                        borderBottomLeftRadius={{
                          base: "0",
                          sm: "0",
                          md: "10px",
                          lg: "10px",
                        }}
                        w="100%"
                        key={index}
                        objectFit="cover"
                        src={`../page_logo${index + 1}.jpg`}
                      />
                    </Box>
                  );
                case 5:
                  return (
                    <Box
                      p={{ base: "0%", sm: "4%", md: "0" }}
                      w={{
                        base: "40%",
                        sm: "calc(100% / 3)",
                        md: "calc(100% / 6)",
                      }}
                    >
                      <Image
                        alt=""
                        borderBottomRightRadius={{
                          base: "0",
                          sm: "0",
                          md: "10px",
                          lg: "10px",
                        }}
                        key={index}
                        objectFit="cover"
                        w="100%"
                        src={`../page_logo${index + 1}.jpg`}
                      />
                    </Box>
                  );
                default:
                  return (
                    <Box
                      p={{ base: "0", sm: "4%", md: "0" }}
                      w={{
                        base: "40%",
                        sm: "calc(100% / 3)",
                        md: "calc(100% / 6)",
                      }}
                    >
                      <Image
                        alt=""
                        key={index}
                        objectFit="cover"
                        w="100%"
                        src={`../page_logo${index + 1}.jpg`}
                      />
                    </Box>
                  );
              }
            })}
          </Flex>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
