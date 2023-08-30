import { Box, HStack, Heading, Avatar } from "@chakra-ui/react";
import { logo } from "../assets/export";

const Navbar = () => {
  return (
    <Box bg="purple.700" h="60px" p={2} width="100%">
      <HStack py={2} px={6}>
        <Avatar size="sm" name="logo-image" src={logo} />
        <Heading size="sm" color="gray.100">
          The Max Property Corner
        </Heading>
      </HStack>
    </Box>
  );
};

export default Navbar;
