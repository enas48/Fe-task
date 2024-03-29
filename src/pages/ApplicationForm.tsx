import React from "react";
import MainLayout from "../components/MainLayout";
import { Form, Container, Row, Col } from "react-bootstrap";

import "./form.css";
import UploadCover from "../components/UploadCover";
import PersonalInformation from "../components/personalInformation/PersonalInformation";
import Profile from "../components/Profile";

function ApplicationForm() {
  return (
    <>
      <MainLayout>
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Form className="d-flex flex-column gap-5">
                <UploadCover />
                <PersonalInformation />
                <Profile />
              </Form>
            </Col>
          </Row>
        </Container>
      </MainLayout>
    </>
  );
}

export default ApplicationForm;
