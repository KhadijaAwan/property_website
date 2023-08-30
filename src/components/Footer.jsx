import {
  Box,
  HStack,
  Heading,
  Avatar,
  Spacer,
  Text,
  Center,
  Image,
  Flex,
} from "@chakra-ui/react";
import { logo } from "../assets/export";
import { MediaLinks } from "./FooterLinks";

const Footer = () => {
  return (
    <Box bg="purple.700" h="240px" p={{ base: "0", lg: "6" }} width="100%">
      <Flex direction={{ base: "column", md: "row" }} align="center">
        <HStack py={6} px={6}>
          <Avatar
            size={{ base: "md", lg: "xl" }}
            name="logo-image"
            src={logo}
          />
          <Heading size={{ base: "sm", lg: "lg" }} color="gray.300">
            The Max Property Corner
          </Heading>
        </HStack>

        <Flex direction="row" p={6} ml={{ base: "0", md: "40%" }}>
          {MediaLinks.map((media) => (
            <Image
              key={media.id}
              src={media.icon}
              cursor="pointer"
              onClick={() => window.open(media.link)}
              boxSize={5}
              mx={2}
            />
          ))}
        </Flex>
      </Flex>

      <Center>
        <Text fontSize="14px" color="gray.300" pt={8}>
          Copyright &copy; 2023 Max Property. All Rights Reserved.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
