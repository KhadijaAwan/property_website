import {
  Box,
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Center,
} from "@chakra-ui/react";
import CardsView from "./CardsView";
import DataTableView from "./DataTableView";

const TabsSection = () => {
  return (
    <Box pt={2} pb={{ base: "2", md: "8" }} width="100%" px={3}>
      <Tabs variant="soft-rounded" colorScheme="purple" isLazy>
        <Center>
          <TabList
            py={4}
            position="relative"
            overflowX={{ base: "scroll", lg: "unset" }}
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
            whiteSpace="nowrap"
            px={{ base: "0", lg: "12" }}
          >
            <Tab>Data Table View</Tab>
            <Tab>Cards View</Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel bg="purple.50" my={4} py={3} borderRadius="lg">
            <DataTableView />
          </TabPanel>
          <TabPanel>
            <CardsView />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsSection;
