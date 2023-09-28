import React, { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { BsUpload } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function UploadCover() {
  const [bgfile, setbgFile] = useState<File | null>(null);
  const [bgfileDataURL, setbgFileDataURL] = useState("");
  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const onCoverChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const files = (e.target as HTMLInputElement).files;
    if (files != null) {
      if (!files[0].type.match(imageMimeType)) {
        return;
      }
      setbgFile(files[0]);
    }
  };

  const onDelete = () => {
    setbgFile(null);
    setbgFileDataURL("");
  };

  useEffect(() => {
    let fileReader: any,
      isCancel = false;
    if (bgfile) {
      fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setbgFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(bgfile);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [bgfile]);

  return (
    <Card className="shadow">
      <Card.Header>Upload cover image</Card.Header>
      <Card.Body>
        <Form.Group className="upload-cover">
          <div className="cover-container">
            <div className="cover-btn ">
              <div className="icon">
                <BsUpload className="icon" />
              </div>
              <span className="fw-bold">Upload cover image</span>
              <br />
              <span className="text-secondry">
                16:9 ratio is recommended. Max image size 1mb
              </span>
            </div>
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={onCoverChange}
            />
            <div className="profile-image">
              <div className="overlay"></div>
              {bgfileDataURL && <img src={bgfileDataURL} alt="" />}
            </div>
          </div>
          {bgfileDataURL && (
            <Button
              variant="link"
              className="text-danger d-flex align-items-center gap-2"
              onClick={onDelete}
            >
              <IoClose className="icon" />
              <span>Delete & re-upload</span>
            </Button>
          )}
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default UploadCover;
