import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import style from "../styles/Card.module.css";

function CardComp(props) {
  let t = props.type === "stocks";
  console.log(Math.floor(Date.now() / 1000));
  let url = `https://finnhub.io/api/v1/quote?symbol=${props.name}&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg`;

  if (t) {
    url = `https://finnhub.io/api/v1/quote?symbol=${props.name}&token=ce1m9giad3i9ep8up0f0ce1m9giad3i9ep8up0fg`;
  }
  console.log(url);

  const [stockDetail, setDeatail] = useState();
  const axios = require("axios");
  const getData = async () => {
    await axios
      .get(url)
      .then(function (response) {
        setDeatail(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(props);
  console.log(t);
  console.log(t);

  return (
    <>
      <div>
        {stockDetail ? (
          <Card className={style.customCard}>
            <Card.Body>
              <Card.Title>
                {t
                  ? `Price ${stockDetail.c}`
                  : `Closing Price ${stockDetail.c[0]}`}
              </Card.Title>
              <Card.Text>
                {t
                  ? `Opening Price : ${stockDetail.o}`
                  : `High Price ${stockDetail.h[0]} `}
              </Card.Text>
              <Card.Text>
                {t
                  ? `Change Percentage : ${stockDetail.dp} %`
                  : `Low Price ${stockDetail.l[0]} `}
              </Card.Text>
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
