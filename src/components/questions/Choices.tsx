import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { customisedQuestions } from "../../model/FormModal";
import { BsListUl } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

interface props {
  question: customisedQuestions;
  handleChoices: (choices: string[]) => void;
}
function Choices({ question, handleChoices }: props) {
  const [inputFields, setInputFields] = useState<string[]>([""]);

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let data = [...inputFields];
    data[index] = event.target.value;
    setInputFields(data);
    handleChoices(data);
  };

  const addFields = () => {
    let newField = "";
    setInputFields([...inputFields, newField]);
  };

  useEffect(() => {
    setInputFields(question.choices);
  }, [question]);
  return (
    <>
      <Form.Group className=" position-relative " controlId="formBasicusername">
        <Form.Label className="fw-bold ">Choices</Form.Label>
        {inputFields.map((input, index) => {
          return (
            <div key={index} className="mb-3 d-flex align-items-center gap-2">
              <BsListUl className="icon" />
              <Form.Control
                className="question"
                name="question"
                value={input}
                type="text"
                placeholder="Type here"
                onChange={(event) => handleFormChange(index, event)}
              />
              <Button variant="light" onClick={addFields}>
                <FiPlus />
              </Button>
            </div>
          );
        })}
      </Form.Group>
    </>
  );
}

export default Choices;
