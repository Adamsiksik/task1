import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";
function ListG(props) {
  return (
    <div>
      {props.prod.map((item, i) => (
        <ListGroup as="ul" key={i}>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.symbol}</div>
              {item.description}
            </div>
            <Badge bg="primary" pill>
              {item.currency}
            </Badge>
            <a href={`/stock_detail?name=${item.symbol}`}>
              <Button variant="primary" size="sm">
                Details
              </Button>
            </a>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
}

export default ListG;
