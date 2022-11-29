import MainList from "../components/list";
import React from "react";
import { useEffect, useState } from "react";
import Seachbar from "../components/searchbar";
export default function Home() {
  const axios = require("axios");
  const [stockName, setName] = useState();

  const getName = async () => {
    await axios
      .get(
        `  https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNYS&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg
              `
      )
      .then(function (response) {
        setName(response.data.slice(0, 200));
        console.log(stockName);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const handleClick = async (query) => {
    setName(null);
    await axios
      .get(
        `  https://finnhub.io/api/v1/search?q=${query}&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg
            `
      )
      .then(function (response) {
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

  useEffect(() => {
    getName();
  }, []);

  return (
    <>
      <Seachbar handleClick={handleClick} />
      <MainList stocks={stockName} />
    </>
  );
}
