import MainList from "../components/list";
import React from "react";
import { useEffect, useState, useMemo } from "react";
import Seachbar from "../components/searchbar";
import Pagination from "@mui/material/Pagination";
import NavigationBar from "../components/navigationbar";

export default function Home() {
  let PageSize = 5;

  const [DataSize, setDataSize] = useState(200);
  const axios = require("axios");
  const [stockName, setName] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getName = async () => {
    await axios
      .get(
        `  https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg
              `
      )
      .then(function (response) {
        setDataSize(200);
        setName(response.data.slice(0, DataSize));
        console.log(stockName);
      })

      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const handleClick = async (query) => {
    setName([]);
    await axios
      .get(
        `  https://finnhub.io/api/v1/search?q=${query}&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg
            `
      )
      .then(function (response) {
        console.log(response.data);
        console.log(response);
        setDataSize(parseInt(response.data.count));

        console.log(DataSize);
        setCurrentPage(1);
        setName(response.data.result);
        console.log(
          `https://finnhub.io/api/v1/search?q=${query}&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg`
        );
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getName();
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return stockName.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, stockName]);

  return (
    <>
    <NavigationBar />
   
      <MainList stocks={currentTableData} type={"crypto"}/>
      {stockName.length === 0 ? (
        ""
      ) : (
        <div
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            count={Math.ceil(DataSize / PageSize)}
            defaultPage={1}
            page={currentPage}
            siblingCount={1}
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
}
