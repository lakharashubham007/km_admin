import React, { useState } from "react";
import { Row, Col, Label, Form } from "reactstrap";
import ChooseFileInput from "../../components/Form/FormComponents/ChooseFileInput";
import ImageViewer from "../../components/Form/FormComponents/ImageViewer";

const MediaForm = () => {
  const [formData, setFormData] = useState({
    files: [],
  });
  
  console.log(formData);
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFormData((prevData) => ({ ...prevData, files: [...prevData.files, ...selectedFiles] }));
  };

  const removeFile = (index) => {
    const updatedFiles = [...formData.files];
    updatedFiles.splice(index, 1);
    setFormData((prevData) => ({ ...prevData, files: updatedFiles }));
  };

  return (
    <Form>
      <Row>
        <Col lg="6">
          <ChooseFileInput
            label="Gallery"
            id="inputGroupFile01"
            onChange={handleFileChange}
            multiple
          />
        </Col>
        <Col lg="6">
          <ImageViewer files={formData.files} onRemoveFile={removeFile} />
        </Col>
      </Row>
    </Form>
  );
};

export default MediaForm;


// // BankDetailsForm.jsx
// import React, { useState } from "react";
// import { Row, Col, Label, Input, Form } from "reactstrap";
// import ChooseFileInput from "../../components/Form/FormComponents/ChooseFileInput";
// import ImageViewer from "../../components/Form/FormComponents/ImageViewer";

// const MediaForm = () => {

//     const [formData, setFormData] = useState({
       
//         file: null,
//     });
    
//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setFormData((prevData) => ({ ...prevData, file }));
//     };

//   return (
//     <Form>
//       <Row>
//       <Col lg="6">
//           <ChooseFileInput
//             label="Gallery"
//             id="inputGroupFile01"
//             onChange={handleFileChange}
//           />
//         </Col>
//         <Col lg="6">
//           <ImageViewer file={formData.file} />
//         </Col>
//       </Row>
//     </Form>
//   );
// };

// export default MediaForm;
