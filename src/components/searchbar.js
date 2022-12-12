import Button from "react-bootstrap/Button";
import { useRef } from "react";

import Form from "react-bootstrap/Form";

function OffcanvasExample(props) {
  const Ref = useRef(null);

  const searchHandle = (event) => {
    event.preventDefault();
    props.handleClick(Ref.current.value);
    event.target.reset();
  };

  return (
    <Form className="d-flex" onSubmit={searchHandle} style={{width:"350px"}}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        ref={Ref}
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
}
export default OffcanvasExample;
