import React from "react";
import { Form } from "react-bootstrap";
import { customisedQuestions } from "../../model/FormModal";
import ButtonContainer from "./ButtonContainer";

interface props {
  question: customisedQuestions;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteQuestion: () => void;
  addQuestion: () => void;
  editQuestion: () => void;
  formtype: string;
}
function YesNoType({
  handleInputChange,
  handleCheckboxChange,
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
          type="text"
          placeholder="Type here"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 pb-3 position-relative d-flex justify-content-between"
        controlId="formBasicusername"
      >
        <Form.Check
          inline
          label="Disqualify candidate if the answer is no"
          name="disqualify"
          type="checkbox"
          checked={question.disqualify}
          onChange={handleCheckboxChange}
        />
      </Form.Group>
      <ButtonContainer
        formtype={formtype}
        editQuestion={editQuestion}
        deleteQuestion={deleteQuestion}
        addQuestion={addQuestion}
      />
    </>
  );
}

export default YesNoType;
