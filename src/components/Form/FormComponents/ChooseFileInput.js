import React from 'react';
import { Col, Row, Label, Input } from 'reactstrap';

const ChooseFileInput = ({ label, id, onChange, multiple }) => {
  return (
    <div className="d-flex flex-row mb-3">
      <Label className="custom-file-label col-md-2 col-form-label" for={id}>
        {label}
      </Label>
      <div className="custom-file col-md-10">
        <Input
          type="file"
          className="custom-file-input"
          id={id}
          
          onChange={onChange}
          multiple={multiple}
        />
      </div>
    </div>
  );
};

export default ChooseFileInput;


// import React from 'react';
// import { Col, Row, Label, Input } from 'reactstrap';

// const ChooseFileInput = ({ label, id,multiple  }) => {
//   return (
//     <div className="d-flex flex-row mb-3">
        
//         <Label   className="custom-file-label col-md-2 col-form-label" for={id}>
//           {label}
//         </Label>
       

//         <div className="custom-file col-md-6">
//           <Input type="file" className="custom-file-input" id={id}  multiple={multiple}/>
//         </div>
        
//     </div>
//   );
// };

// export default ChooseFileInput;