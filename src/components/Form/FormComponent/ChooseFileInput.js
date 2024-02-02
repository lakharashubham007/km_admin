// ChooseFileInput.js
import React, { useState } from "react";
import { Col, Row, Label, Input } from "reactstrap";
import ImageViewer from "./ImageViewer";

const ChooseFileInput = ({
  label,
  id,
  onChange,
  multiple,
  imageViewer,
  fieldName,
}) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    onChange(fieldName, multiple ? selectedFiles : selectedFiles[0]); // Pass either single file or array of files based on the multiple prop
  };

  const removeFile = (updatedFiles) => {
    setFiles(updatedFiles);
    onChange(
      fieldName,
      multiple ? updatedFiles : updatedFiles.length > 0 ? updatedFiles[0] : null
    );
  };

  return (
    <>
      <Row className="d-flex flex-row mb-3">
        <Label className="custom-file-label col-md-2 col-form-label" for={id}>
          {label}
        </Label>
        <div className="custom-file col-md-10">
          <Input
            type="file"
            className="custom-file-input"
            id={id}
            onChange={handleFileChange}
            multiple={multiple}
          />
        </div>
      </Row>

      <Row className="d-flex flex-row mb-3" >
        {imageViewer && <ImageViewer files={files} onRemoveFile={removeFile}/>}
      </Row>
      </>
  );
};

export default ChooseFileInput;
