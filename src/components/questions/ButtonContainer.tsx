import React from "react";
import { Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

interface props {
  deleteQuestion: () => void;
  addQuestion: () => void;
  editQuestion: () => void;
  formtype: string;
}
function ButtonContainer({
  formtype,
  editQuestion,
  deleteQuestion,
  addQuestion,
}: props) {
  return (
    <div className="d-flex justify-content-between mt-3">
      <Button
        variant="link"
        className="text-danger p-0 d-flex align-items-center gap-2"
        onClick={deleteQuestion}
      >
        <IoClose className="icon" />
        <span>Delete question</span>
      </Button>
      {formtype === "edit" ? (
        <Button
          variant="success"
          className=" d-flex align-items-center gap-2"
          onClick={editQuestion}
        >
          <span>save</span>
        </Button>
      ) : (
        <Button
          variant="success"
          className=" d-flex align-items-center gap-2"
          onClick={addQuestion}
        >
          <span>save</span>
        </Button>
      )}
    </div>
  );
}

export default ButtonContainer;
