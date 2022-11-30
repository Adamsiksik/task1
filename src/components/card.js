import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function CardComp(props) {
  const [stockDetail, setDeatail] = useState();
  const axios = require("axios");
  const getData = async () => {
    await axios
      .get(
        `https://finnhub.io/api/v1/quote?symbol=${props.name}&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg`
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
  }, []);

  return (
    <>
      <div>
        {stockDetail ? (
          <Card>
            <Card.Body>
              <Card.Title>Price {stockDetail.c}</Card.Title>
              <Card.Text>Opening Price : {stockDetail.o}</Card.Text>
              <Card.Text>Change Percentage : {stockDetail.dp}%</Card.Text>
              <Button variant="primary">Buy Stock</Button>
            </Card.Body>
          </Card>
        ) : (
          <span>Loading Stock info...</span>
        )}
      </div>
    </>
  );
}

export default CardComp;
