import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface props {
  handleAddData: (data: string, type: string) => void;
  type: string;
  title: string;
}
function Input({ handleAddData, type, title }: props) {
  const [data, setData] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setData(e.target.value);
    handleAddData(value, type);
  };

  return (
    <Form.Group
      className="mb-3 position-relative"
      controlId="formBasicusername"
    >
      <Form.Label className="fw-bold mb-0">{title}</Form.Label>
      <Form.Control value={data} type="text" onChange={onChange} />
    </Form.Group>
  );
}

export default Input;
