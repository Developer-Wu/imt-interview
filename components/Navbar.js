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
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar() {
  const navItems = [
    "Home",
    "Articles",
    "Brands",
    "Blog",
    "About Us",
    "Contact Us",
  ];

  const categoryItems = [
    {
      item: "Home",
      border: "r",
    },
    {
      item: "Nutrition",
      border: "r",
    },
    {
      item: "Recipes",
      border: "r",
    },
    {
      item: "News & Trends",
      border: "r",
    },
    {
      item: "Lifestyle",
      border: "r",
    },
    {
      item: "Health",
      border: "r",
    },
    {
      item: "Beauty",
      border: "r",
    },
    {
      item: "Marketplace",
      border: "l",
    },
  ];

  return (
    <>
      <DesktopNav navItems={navItems} categoryItems={categoryItems} />
      <MobileNav categoryItems={categoryItems} navItems={navItems} />
    </>
  );
}

export default Navbar;
