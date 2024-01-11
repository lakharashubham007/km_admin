import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Label } from "reactstrap";
import Select from "react-select";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import "flatpickr/dist/themes/material_blue.css";

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" }
    ]
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" }
    ]
  }
];

const FormAdvanced = () => {
  const [breadcrumbItems] = useState([
    { title: "Forms", link: "#" },
    { title: "Form Advanced", link: "#" },
  ]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedMulti, setSelectedMulti] = useState(null);
  const [selectedMulti1, setSelectedMulti1] = useState(null);

  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  };

  const handleMulti = (selectedMulti) => {
    setSelectedMulti(selectedMulti);
  };

  const handleMulti1 = (selectedMulti1) => {
    setSelectedMulti1(selectedMulti1);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Form Advanced" breadcrumbItems={breadcrumbItems} />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Select2</h4>
                  <p className="card-title-desc">
                    A mobile and touch friendly input spinner component for
                    Bootstrap
                  </p>

                  <form>
                    <Row>
                      <Col lg="6">
                        <div className="mb-3">
                          <Label className="form-label">Single Select</Label>
                          <Select
                            value={selectedGroup}
                            onChange={handleSelectGroup}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div>
                        <div className="mb-3">
                          <Label className="form-label">Multiple Select</Label>
                          <Select
                            value={selectedMulti}
                            isMulti={true}
                            onChange={handleMulti}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div>
                      </Col>

                      <Col lg="6">
                        <div className="mb-3">
                          <Label className="form-label">Disable</Label>
                          <Select
                            value={selectedMulti1}
                            isMulti={true}
                            onChange={handleMulti1}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                            isDisabled={true}
                          />
                        </div>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormAdvanced;



//Class based code
// import React, { Component } from "react";
// import { Container, Row, Col, Card, CardBody,  Label } from "reactstrap";


// import "flatpickr/dist/themes/material_blue.css";

// import Select from "react-select";

// //Import Breadcrumb
// import Breadcrumbs from '../../components/Common/Breadcrumb';


// const optionGroup = [
//     {
//         label: "Picnic",
//         options: [
//             { label: "Mustard", value: "Mustard" },
//             { label: "Ketchup", value: "Ketchup" },
//             { label: "Relish", value: "Relish" }
//         ]
//     },
//     {
//         label: "Camping",
//         options: [
//             { label: "Tent", value: "Tent" },
//             { label: "Flashlight", value: "Flashlight" },
//             { label: "Toilet Paper", value: "Toilet Paper" }
//         ]
//     }
// ];

// class FormAdvanced extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             breadcrumbItems: [
//                 { title: "Forms", link: "#" },
//                 { title: "Form Advanced", link: "#" },
//             ],
//             selectedGroup: null,
//             selectedMulti: null,
//             selectedMulti1: null,
//             selectedMulti2: null,
//             selectedMulti3: null,
//         };        
//         this.handleSelectGroup = this.handleSelectGroup.bind(this);
//         this.handleMulti = this.handleMulti.bind(this);
//         this.handleMulti1 = this.handleMulti1.bind(this);
//     }

  
//     //Select
//     handleSelectGroup = selectedGroup => {
//         this.setState({ selectedGroup });
//     };
//     handleMulti = selectedMulti => {
//         this.setState({ selectedMulti });
//     };
//     handleMulti1 = selectedMulti1 => {
//         this.setState({ selectedMulti1 });
//     };
//     render() {
//         const { selectedGroup } = this.state;
//         const { selectedMulti } = this.state;
//         const { selectedMulti1 } = this.state;

//         return (
//             <React.Fragment>
//                 <div className="page-content">
//                     <Container fluid>
//                         <Breadcrumbs title="Form Advanced" breadcrumbItems={this.state.breadcrumbItems} />
//                         <Row>
//                             <Col lg="12">
//                                 <Card>
//                                     <CardBody>

//                                         <h4 className="card-title">Select2</h4>
//                                         <p className="card-title-desc">A mobile and touch friendly input spinner component for Bootstrap</p>

//                                         <form>
//                                             <Row>
//                                                 <Col lg="6">
//                                                     <div className="mb-3">
//                                                         <Label className="form-label">Single Select</Label>
//                                                         <Select
//                                                             value={selectedGroup}
//                                                             onChange={this.handleSelectGroup}
//                                                             options={optionGroup}
//                                                             classNamePrefix="select2-selection"
//                                                         />

//                                                     </div>
//                                                     <div className="mb-3">
//                                                         <Label className="form-label">Multiple Select</Label>
//                                                         <Select
//                                                             value={selectedMulti}
//                                                             isMulti={true}
//                                                             onChange={this.handleMulti}
//                                                             options={optionGroup}
//                                                             classNamePrefix="select2-selection"
//                                                         />
//                                                     </div>
//                                                 </Col>

//                                                 <Col lg="6">
//                                                     <div className="mb-3">
//                                                         <Label className="form-label">Disable</Label>
//                                                         <Select
//                                                             value={selectedMulti1}
//                                                             isMulti={true}
//                                                             onChange={this.handleMulti1}
//                                                             options={optionGroup}
//                                                             classNamePrefix="select2-selection"
//                                                             isDisabled={true}
//                                                         />
//                                                     </div>
//                                                 </Col>
//                                             </Row>
//                                         </form>
//                                     </CardBody>
//                                 </Card>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// export default FormAdvanced;
