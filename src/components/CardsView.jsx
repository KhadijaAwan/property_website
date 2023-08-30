import {
  Box,
  Card,
  SimpleGrid,
  CardHeader,
  Heading,
  Button,
  CardBody,
  Image,
  Spacer,
  HStack,
  Center,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const CardsView = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    axios
      .get("https://my-json-server.typicode.com/KhadijaAwan/api/listings")
      .then((res) => setData(res.data));
  }, []);

  return (
    <Box mt={6} p={6} width="100%" bg="purple.50" borderRadius="lg">
      {load ? (
        <Center height="200px">
          <SyncLoader
            color="#9a6abf"
            loading={load}
            size={18}
            aria-label="Loading Spinner"
          />
        </Center>
      ) : (
        <>
          <SimpleGrid
            spacing={14}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            width="100%"
          >
            {data &&
              data.map((d) => (
                <Link to={`/property_website/property/${d.id}`} key={d.id}>
                  <Card
                    key={d.id}
                    _hover={{
                      transform: "scale(1.05)",
                      boxShadow: "lg",
                    }}
                  >
                    <CardHeader width="100%" height="200px" p={0} m={0}>
                      <Image
                        objectFit="cover"
                        width="100%"
                        borderTopRadius="lg"
                        src={d.imageUrl}
                        alt="Chair"
                        height="100%"
                      />
                    </CardHeader>
                    <CardBody bg="pink.50">
                      <HStack>
                        <Heading size="sm">{d.title}</Heading>
                        <Spacer />
                        <Text fontSize="12.5px" as="b">
                          {d.price} PKR
                        </Text>
                      </HStack>
                    </CardBody>
                    <Button colorScheme="teal" borderTopRadius="none">
                      Read More
                    </Button>
                  </Card>
                </Link>
              ))}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
};

export default CardsView;
