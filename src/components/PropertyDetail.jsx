import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/KhadijaAwan/api/listings/${id}`)
      .then((res) => setPropertyData(res.data));
  }, []);

  return (
    <Box p={{ base: "8", lg: "4" }} key={propertyData.id} bg="gray.100">
      <Flex direction={{ base: "column", lg: "row" }}>
        <Box
          width="100%"
          bg="purple.100"
          py={{ base: "10", lg: "20" }}
          px={12}
          borderLeftRadius="lg"
          borderRightRadius={{ base: "lg", lg: "none" }}
        >
          <Heading as="h1" size="3xl">
            {propertyData.title}
          </Heading>
          <Text my={6}>Location: {propertyData.address}</Text>
          <Text my={4} size="xs">
            Total Area: {propertyData.coveredAreaSQFT} Square foot Area
          </Text>
          <Text my={6}>
            {propertyData.isCommercial
              ? "Commercial Property"
              : "Residential Property"}
          </Text>
          <Heading size="lg">{propertyData.price} PKR</Heading>

          <HStack my={6}>
            <Badge borderRadius="3xl">
              <Flex direction="row" p={2}>
                <LiaBedSolid size={17} color="Black" />
                <Text fontSize="xs" ml={1.5}>
                  {propertyData.beds} Beds
                </Text>
              </Flex>
            </Badge>

            <Badge borderRadius="3xl">
              <Flex direction="row" p={2}>
                <LiaBathSolid size={17} color="Black" />
                <Text fontSize="xs" ml={1.5}>
                  {propertyData.bath} Bath
                </Text>
              </Flex>
            </Badge>
          </HStack>

          <Badge
            color="gray.100"
            p={3}
            my={2}
            bg="teal"
            borderRadius="xl"
            letterSpacing={0.3}
            fontSize={{ base: "12px", lg: "15px" }}
          >
            Comfortable place to live
          </Badge>
        </Box>
        <Box
          bg="gray.300"
          width="100%"
          py={8}
          borderRightRadius="lg"
          borderLeftRadius={{ base: "lg", lg: "none" }}
        >
          <Image
            boxSize={{ base: "320px", lg: "470px" }}
            mx="auto"
            src={propertyData.imageUrl}
            alt="property-image"
            borderRadius="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PropertyDetail;
