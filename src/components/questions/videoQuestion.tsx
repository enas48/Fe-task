import React from "react";
import { Form } from "react-bootstrap";
import { customisedQuestions } from "../../model/FormModal";
import ButtonContainer from "./ButtonContainer";

interface props {
  question: customisedQuestions;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteQuestion: () => void;
  addQuestion: () => void;
  editQuestion: () => void;
  formtype: string;
}

function VideoQuestion({
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
          className="question mb-3"
          name="question"
          value={question.question}
          type="text"
          placeholder="Type here"
          onChange={handleInputChange}
        />
        <Form.Control
          className="question"
          name="additionalInfo"
          value={question.additionalInfo}
          type="text"
          placeholder="Additional information"
          onChange={handleInputChange}
        />
      </Form.Group>
      <div className="d-flex gap-2">
        <Form.Group
          className="mb-3 position-relative w-50"
          controlId="formBasicusername"
        >
          <Form.Control
            className="question mb-3"
            name="duration"
            value={question.duration}
            type="number"
            placeholder="Max duration of video"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 position-relative w-50"
          controlId="formBasicusername"
        >
          <Form.Select
            aria-label="Default select example"
            value={question.time}
            onChange={handleInputChange}
            name="time"
          >
            <option value="">in (sec/min)</option>
            <option value="Minute">Minute</option>
            <option value="Seconds">Seconds</option>
          </Form.Select>
        </Form.Group>
      </div>

      <ButtonContainer
        formtype={formtype}
        editQuestion={editQuestion}
        deleteQuestion={deleteQuestion}
        addQuestion={addQuestion}
      />
    </>
  );
}

export default VideoQuestion;
