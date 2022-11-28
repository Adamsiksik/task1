import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function CardComp() {
  const [stockDetail, setDeatail] = useState();
  const axios = require("axios");
  const getData = async () => {
    await axios
      .get(
        `https://finnhub.io/api/v1/quote?symbol=${window.location.href.substring(window.location.href.indexOf('=')+1)}&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg`
      )
      .then(function (response) {
        setDeatail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  useEffect(() => {
    getData();
    console.log(stockDetail);
  }, []);

  return (
    <>
      <div>
        {stockDetail ? (
          <Card>
            <Card.Header>{window.location.href.substring(window.location.href.indexOf('=')+1)}</Card.Header>
            <Card.Body>
              <Card.Title>Price {stockDetail.c}</Card.Title>
              <Card.Text>Opening Price : {stockDetail.o}</Card.Text>
              <Card.Text>Change Percentage : {stockDetail.dp}%</Card.Text>
              <Button variant="primary">Buy Stock</Button>
            </Card.Body>
          </Card>
        ) : (
          <span>Loading Stock...</span>
        )}
      </div>
    </>
  );
}

export default CardComp;
