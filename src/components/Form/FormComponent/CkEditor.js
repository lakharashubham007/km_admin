import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Col, Label } from "reactstrap";

const CkEditor = ({ initialData, label,  onChange, fieldName }) => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    onChange(fieldName, data); // Update the form data with CKEditor content
  };

  return (
    <div className="d-flex flex-row mb-3 mt-3">
      <Label htmlFor={fieldName} className="col-md-1 col-form-label">
        {label}
      </Label>
      <Col>
        <CKEditor
          editor={ClassicEditor}
          data={initialData}
          onChange={handleEditorChange}
          
        />
      </Col>
    </div>
  );
};

export default CkEditor;
