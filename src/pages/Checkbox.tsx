import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { personalProp, profileProp } from "../model/FormModal";

interface props {
  handleAddData: (data: personalProp | profileProp, type: string) => void;
  type: string;
  title: string;
  formType: string;
}
function Checkbox({ handleAddData, type, title, formType }: props) {
  const [data, setData] = useState<personalProp>({
    internalUse: false,
    show: false,
  });
  const [profileData, setProfileData] = useState<profileProp>({
    mandatory: false,
    show: false,
  });
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (formType === "personal") {
      let dataUpdated = {
        ...data,
        [name]: checked,
      };

      setData(dataUpdated);
      handleAddData(dataUpdated, type);
    }
    if (formType === "profile") {
      let dataUpdated = {
        ...profileData,
        [name]: checked,
      };

      setProfileData(dataUpdated);
      handleAddData(dataUpdated, type);
    }
  };

  return (
    <Form.Group
      className="mb-3 pb-3 checbox-container position-relative d-flex justify-content-between"
      controlId="formBasicusername"
    >
      <Form.Label className="fw-bold mb-0">{title}</Form.Label>
      <div className="d-flex">
        {formType === "personal" ? (
          <>
            <Form.Check
              inline
              label="Internal"
              name="internalUse"
              type="checkbox"
              checked={data.internalUse}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label={data.show ? "Show" : "Hide"}
              checked={data.show}
              onChange={handleCheckboxChange}
              name="show"
            />
          </>
        ) : (
          <>
            <Form.Check
              inline
              label="Mandatory"
              name="mandatory"
              type="checkbox"
              checked={profileData.mandatory}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label={profileData.show ? "Show" : "Hide"}
              checked={profileData.show}
              onChange={handleCheckboxChange}
              name="show"
            />{" "}
          </>
        )}
      </div>
    </Form.Group>
  );
}

export default Checkbox;
