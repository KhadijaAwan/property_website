import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Center } from "@chakra-ui/react";

const Links = () => {
  return (
    <Center my={{ base: "10", lg: "3" }}>
      <ChakraLink
        as={ReactRouterLink}
        to="/property_website/"
        bg="purple"
        py={3}
        px={8}
        color="gray.100"
        fontWeight="semibold"
        borderRadius="full"
        textDecoration="none"
      >
        Home
      </ChakraLink>
    </Center>
  );
};

export default Links;
