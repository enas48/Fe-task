import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { customisedQuestions } from "../model/FormModal";
import QuestionType from "./questions/QuestionType";
import { MdOutlineEdit } from "react-icons/md";

function AddQuestion() {
  const [questions, setQuestions] = useState<customisedQuestions[]>([]);
  const [showQuestion, setShowQuestion] = useState(false);
  const [type, setType] = useState("Paragraph");
  const [questionBeingEdited, setQuestionBeingEdited] = useState({});
  const [newQuestionBtn, setNewQuestionBtn] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };
  const handleAdd = () => {
    setType("Paragraph");
    setQuestionBeingEdited({});
    setShowQuestion(true);
    setNewQuestionBtn(false);
  };
  const handleAddNewQuestion = (question: customisedQuestions) => {
    setType("Paragraph");
    setQuestions([...questions, question]);
    setQuestionBeingEdited({});
    setShowQuestion(false);
    setNewQuestionBtn(true);
  };
  const handleEdit = (question: customisedQuestions) => {
    setType(question.type);
    setQuestionBeingEdited(question);
    setShowQuestion(false);
    setNewQuestionBtn(false);
  };
  const handleEditQuestion = (question: customisedQuestions) => {
    let updatedQuestion = questions.map((q) => {
      return q.id === question.id ? question : q;
    });
    setQuestions(updatedQuestion);
    setQuestionBeingEdited({});
    setShowQuestion(false);
    setNewQuestionBtn(true);
  };
  const deleteQuestion = (question: customisedQuestions) => {
    let updatedQuestion = questions.filter((q) => {
      return q.id !== question.id;
    });
    setType("Paragraph");
    setQuestions(updatedQuestion);
    setQuestionBeingEdited({});
    setShowQuestion(false);
    setNewQuestionBtn(true);
  };

  return (
    <>
      {questions.length !== 0 &&
        questions.map((item) =>
          item === questionBeingEdited ? (
            <div key={item.id}>
              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicusername"
              >
                <Form.Label className="fw-bold mb-2">Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={type}
                  onChange={handleChange}
                >
                  <option value="Paragraph">Paragraph</option>
                  <option value="ShortAnswer">Short answer</option>
                  <option value="YesNo">Yes/No</option>
                  <option value="Dropdown">Dropdown</option>
                  <option value="MultipleChoice">Multiple choice</option>
                  <option value="Date">Date</option>
                  <option value="Number">Number</option>
                  <option value="FileUpload">File upload</option>
                  <option value="videoQuestion">Video question</option>
                </Form.Select>
              </Form.Group>
              <QuestionType
                key={item.id}
                type={type}
                deleteQuestion={deleteQuestion}
                handleAddNewQuestion={handleAddNewQuestion}
                handleEditQuestion={handleEditQuestion}
                questionData={item}
                formtype="edit"
              />
            </div>
          ) : (
            <div className="border-bottom mb-3" key={item.id}>
              <span className="text-secondry">
                {item.type === "YesNo" ? "Yes/No questions" : item.type}
              </span>
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold m-0">{item.question}</p>
                <Button variant="light" onClick={() => handleEdit(item)}>
                  <MdOutlineEdit />
                </Button>
              </div>
            </div>
          )
        )}
      {showQuestion && (
        <>
          <Form.Group
            className="mb-3 position-relative"
            controlId="formBasicusername"
          >
            <Form.Label className="fw-bold mb-2">Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={type}
              onChange={handleChange}
            >
              <option value="Paragraph">Paragraph</option>
              <option value="ShortAnswer">Short answer</option>
              <option value="YesNo">Yes/No</option>
              <option value="Dropdown">Dropdown</option>
              <option value="MultipleChoice">Multiple choice</option>
              <option value="Date">Date</option>
              <option value="Number">Number</option>
              <option value="FileUpload">File upload</option>
              <option value="videoQuestion">Video question</option>
            </Form.Select>
          </Form.Group>
          <QuestionType
            type={type}
            deleteQuestion={deleteQuestion}
            handleAddNewQuestion={handleAddNewQuestion}
            handleEditQuestion={handleEditQuestion}
            formtype="add"
          />
        </>
      )}
      {newQuestionBtn && (
        <Button
          variant="light"
          className="p-0 d-flex align-items-center gap-2 mt-2"
          onClick={handleAdd}
        >
          <AiOutlinePlus className="icon" />
          <span>Add a question</span>
        </Button>
      )}
    </>
  );
}

export default AddQuestion;
