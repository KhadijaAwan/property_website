import { useState, useEffect } from "react";
import { Box, Input, useBreakpointValue, Center } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyleSheetManager } from "styled-components";
import SyncLoader from "react-spinners/SyncLoader";

const DataTableView = () => {
  const [data, setData] = useState([]);
  const [filterData, SetFilterData] = useState([]);
  const [load, setLoad] = useState(false);
  const columnFontSize = useBreakpointValue({ base: "12px", md: "15px" });

  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <Link to={`/property_website/property/${row.id}`}>{row.id}</Link>
      ),

      minWidth: "10px",
      maxWidth: "80px",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      cell: (row) => (
        <Link to={`/property_website/property/${row.id}`}>{row.title}</Link>
      ),
      minWidth: "82px",
    },
    {
      name: "Address",
      cell: (row) => (
        <Link to={`/property_website/property/${row.id}`}>{row.address}</Link>
      ),
      minWidth: "92px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      cell: (row) => (
        <Link to={`/property_website/property/${row.id}`}>{row.price}</Link>
      ),
      minWidth: "90px",
      maxWidth: "120px",
    },
  ];

  const styles = {
    headRow: {
      style: {
        backgroundColor: "purple",
        color: "white",
        textTransform: "uppercase",
        fontSize: columnFontSize,
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        fontSize: "13px",
        whiteSpace: "normal",
      },
    },
  };

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    axios
      .get("https://my-json-server.typicode.com/KhadijaAwan/api/listings")
      .then((res) => {
        setData(res.data);
        SetFilterData(res.data);
      });
  }, []);

  const filterContent = (event) => {
    const value = event.target.value.toLowerCase();
    const filterValue = filterData.filter(
      (row) =>
        row.address.toLowerCase().includes(value) ||
        row.title.toLowerCase().includes(value)
    );
    setData(filterValue);
  };

  return (
    <Box
      p={{ base: "0", md: "8" }}
      margin="auto"
      width={{ base: "100%", lg: "52%" }}
    >
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
          <Input
            bg="white"
            placeholder="Search"
            size="md"
            width="280px"
            my={4}
            onChange={filterContent}
          />
          <StyleSheetManager
            shouldForwardProp={(prop) =>
              !["maxWidth", "minWidth", "sortActive"].includes(prop)
            }
          >
            <DataTable
              columns={column}
              data={data}
              customStyles={styles}
              pagination
            ></DataTable>
          </StyleSheetManager>
        </>
      )}
      ;
    </Box>
  );
};

export default DataTableView;
