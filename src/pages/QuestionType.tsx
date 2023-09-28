import React, { useEffect, useState } from "react";
import { customisedQuestions } from "../model/FormModal";
import uuid from "react-uuid";
import ParagraphType from "./questions/ParagraphType";
import YesNoType from "./questions/YesNoType";
import DropdownType from "./questions/DropdownType";
import MultipleChoice from "./questions/MultipleChoice";
import VideoQuestion from "./questions/videoQuestion";

interface props {
  type: string;
  formtype: string;
  questionData?: customisedQuestions;
  deleteQuestion: (question: customisedQuestions) => void;
  handleAddNewQuestion: (question: customisedQuestions) => void;
  handleEditQuestion: (question: customisedQuestions) => void;
}
function QuestionType({
  type,
  formtype,
  deleteQuestion,
  handleAddNewQuestion,
  questionData,
  handleEditQuestion,
}: props) {
  const [question, setQuestion] = useState<customisedQuestions>({
    id: uuid(),
    type: type,
    question: "",
    choices: [""],
    maxChoice: 0,
    disqualify: false,
    other: false,
    additionalInfo: "",
    duration: 0,
    time: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    let newQuestion = { ...question, [name]: value };
    setQuestion(newQuestion);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    let newQuestion = {
      ...question,
      [name]: checked,
    };
    setQuestion(newQuestion);
  };

  const handleChoices = (choices: string[]) => {
    let newQuestion = {
      ...question,
      choices,
    };
    setQuestion(newQuestion);
  };

  const addQuestion = () => {
    handleAddNewQuestion(question);
  };
  const editQuestion = () => {
    handleEditQuestion(question);
  };
  const handledeleteQuestion = () => {
    deleteQuestion(question);
  };
  useEffect(() => {
    if (questionData) {
      if (questionData.type === type) {
        setQuestion(questionData);
      } else {
        setQuestion({
          ...question,
          type: type,
          question: "",
          choices: [""],
          maxChoice: 0,
          disqualify: false,
          other: false,
        });
      }
    } else {
      setQuestion({ ...question, type: type });
    }
  }, [type]);

  return (
    <>
      {type === "Paragraph" && (
        <ParagraphType
          question={question}
          handleInputChange={handleInputChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
          type="text"
        />
      )}
      {type === "ShortAnswer" && (
        <ParagraphType
          question={question}
          handleInputChange={handleInputChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
          type="text"
        />
      )}
      {type === "YesNo" && (
        <YesNoType
          question={question}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
        />
      )}
      {type === "Dropdown" && (
        <DropdownType
          question={question}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
          handleChoices={handleChoices}
        />
      )}
      {type === "MultipleChoice" && (
        <MultipleChoice
          question={question}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
          handleChoices={handleChoices}
        />
      )}
      {type === "Date" && (
        <ParagraphType
          question={question}
          handleInputChange={handleInputChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
          type="date"
        />
      )}
      {type === "Number" && (
        <ParagraphType
          question={question}
          handleInputChange={handleInputChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
          type="number"
        />
      )}
      {type === "FileUpload" && (
        <ParagraphType
          question={question}
          handleInputChange={handleInputChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
          type="text"
        />
      )}
      {type === "videoQuestion" && (
        <VideoQuestion
          question={question}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          addQuestion={addQuestion}
          deleteQuestion={handledeleteQuestion}
          editQuestion={editQuestion}
          formtype={formtype}
        />
      )}
    </>
  );
}

export default QuestionType;
