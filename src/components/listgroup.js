import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import style from "../styles/list.module.css";

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "./card";
function ListG(props) {
  let t = props.type === "stocks";
  const [active, setActive] = useState();
  useEffect(() => {
    setActive();
  }, [props]);
  return (
    <div>
      {props.prod.map((item, i) => (
        <ListGroup as="ul" key={i}>
          <ListGroup.Item 
            as="li"
            
            className={active !== i ? style.list: style.listactive}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.symbol}</div>
              {item.description}
            </div>
            <Badge bg="primary" pill>
              {t === true ? item.currency : item.description}
            </Badge>
            {t ? (
              <Button
                onClick={() => {
                  if (active === i) {
                    setActive();
                  } else {
                    setActive(i);
                  }
                }}
                variant="primary"
                size="sm"
              >
                Details
              </Button>
            ) : (
              " "
            )}
          </ListGroup.Item>
          <div>
            {active !== i ? "" : <Card name={item.symbol} type={props.type} />}
          </div>
        </ListGroup>
      ))}
    </div>
  );
}

export default ListG;
