import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { personalProp, personal, profileProp } from "../../model/FormModal";
import Checkbox from "../Checkbox";
import Input from "./Input";
import AddQuestion from "../AddQuestion";

function PersonalInformation() {
  const [data, setFormData] = useState<personal>({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: {
      internalUse: false,
      show: false,
    },
    nationality: {
      internalUse: false,
      show: false,
    },
    currentResidence: {
      internalUse: false,
      show: false,
    },
    idNumber: {
      internalUse: false,
      show: false,
    },
    dateOfBirth: {
      internalUse: false,
      show: false,
    },
    gender: {
      internalUse: false,
      show: false,
    },
  });

  const handleAddData = (
    d: personalProp | profileProp | string,
    type: string
  ) => {
    let formData = {
      ...data,
      [type]: d,
    };
    setFormData(formData);
  };

  return (
    <Card className="shadow">
      <Card.Header>Personal personalProprmation</Card.Header>
      <Card.Body>
        <Input
          handleAddData={handleAddData}
          type="firstName"
          title="First Name"
        />
        <Input
          handleAddData={handleAddData}
          type="lastName"
          title="Last Name"
        />
        <Input handleAddData={handleAddData} type="emailId" title="Email" />
        <Checkbox
          handleAddData={handleAddData}
          type="phoneNumber"
          title="Phone"
          formType="personal"
        />
        <Checkbox
          handleAddData={handleAddData}
          type="nationality"
          title="Nationality"
          formType="personal"
        />
        <Checkbox
          handleAddData={handleAddData}
          type="currentResidence"
          title="Current Residence"
          formType="personal"
        />
        <Checkbox
          handleAddData={handleAddData}
          type="idNumber"
          title="ID Number"
          formType="personal"
        />
        <Checkbox
          handleAddData={handleAddData}
          type="dateOfBirth"
          title="Date of Birth"
          formType="personal"
        />
        <Checkbox
          handleAddData={handleAddData}
          type="gender"
          title="Gender"
          formType="personal"
        />
        <AddQuestion />
      </Card.Body>
    </Card>
  );
}

export default PersonalInformation;
