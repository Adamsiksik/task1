import { useEffect, useState } from "react";
import ListG from "./listgroup";
export default function MainList() {
  const [stockName, setName] = useState();
  const axios = require("axios");
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



  useEffect(() => {
    console.log("useEffect ran");
    getName();
  }, []);

  return (
    <>
      <div>
        {stockName ? (
          <ListG prod={stockName} />
        ) : (
          <span>Loading Stocks...</span>
        )}
      </div>
    </>
  );
}
