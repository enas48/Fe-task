import React from "react";
import { Form } from "react-bootstrap";
import { customisedQuestions } from "../../model/FormModal";
import ButtonContainer from "./ButtonContainer";

interface props {
  question: customisedQuestions;
  type: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  deleteQuestion: () => void;
  addQuestion: () => void;
  editQuestion: () => void;
  formtype: string;
}
function ParagraphType({
  handleInputChange,
  type,
  formtype,
  question,
  editQuestion,
  deleteQuestion,
  addQuestion,
}: props) {
  return (
    <>
      <Form.Group
        className="mb-3 position-relative"
        controlId="formBasicusername"
      >
        <Form.Label className="fw-bold ">Question</Form.Label>
        <Form.Control
          className="question"
          name="question"
          value={question.question}
          type={type}
          placeholder="Type here"
          onChange={handleInputChange}
        />
        <ButtonContainer
          formtype={formtype}
          editQuestion={editQuestion}
          deleteQuestion={deleteQuestion}
          addQuestion={addQuestion}
        />
      </Form.Group>
    </>
  );
}

export default ParagraphType;
