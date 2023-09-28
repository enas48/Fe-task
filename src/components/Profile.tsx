import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { personalProp, profile, profileProp } from "../model/FormModal";
import Checkbox from "./Checkbox";

function Profile() {
  const [data, setFormData] = useState<profile>({
    education: {
      mandatory: false,
      show: false,
    },
    experience: {
      mandatory: false,
      show: false,
    },
    resume: {
      mandatory: false,
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
      <Card.Header>Profile</Card.Header>
      <Card.Body>
        <Checkbox
          handleAddData={handleAddData}
          type="education"
          title="Education"
          formType="profile"
        />
        <Checkbox
          handleAddData={handleAddData}
          type="experience"
          title="Experience"
          formType="profile"
        />
        <Checkbox
          handleAddData={handleAddData}
          type="resume"
          title="Resume"
          formType="profile"
        />
      </Card.Body>
    </Card>
  );
}

export default Profile;
