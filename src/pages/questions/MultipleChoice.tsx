import React from "react";
import { Form } from "react-bootstrap";
import { customisedQuestions } from "../../model/FormModal";
import Choices from "../Choices";
import ButtonContainer from "./ButtonContainer";

interface props {
  question: customisedQuestions;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChoices: (choices: string[]) => void;
  deleteQuestion: () => void;
  addQuestion: () => void;
  editQuestion: () => void;
  formtype: string;
}
function MultipleChoice({
  handleInputChange,
  handleCheckboxChange,
  handleChoices,
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
          required
          type="text"
          placeholder="Type here"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Choices question={question} handleChoices={handleChoices} />
      <Form.Group
        className="mb-3 pb-3 position-relative d-flex justify-content-between"
        controlId="formBasicusername"
      >
        <Form.Check
          inline
          label="Enable “Other” option "
          name="other"
          type="checkbox"
          checked={question.other}
          onChange={handleCheckboxChange}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 position-relative"
        controlId="formBasicusername"
      >
        <Form.Label className="fw-bold ">Max choice allowed</Form.Label>
        <Form.Control
          className="question"
          name="maxChoice"
          value={question.maxChoice}
          required
          type="number"
          placeholder="Enter number of choice allowed here"
          onChange={handleInputChange}
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

export default MultipleChoice;
