import React, { useState, useEffect } from "react";
import { Form, Card, CardBody, Col, Row, Container, CardHeader } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Breadcrumbs from '../../components/Common/Breadcrumb';

const FormEditors = () => {
  const [breadcrumbItems] = useState([
    { title: "Forms", link: "#" },
    { title: "Form Editors", link: "#" },
  ]);

  useEffect(() => {
    // ComponentDidMount logic can go here
    console.log("FormEditors component mounted");

    // You can perform any additional logic here, such as setting initial state
    // For example, setting a boolean flag to true
    // setSomeInitialState(true);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>

          <Breadcrumbs title="Form Editor" breadcrumbItems={breadcrumbItems} />

          <Row>
            <Col>
              <Card>
                <CardHeader className="align-items-center d-flex">
                  <h4 className="card-title mb-0">Ckeditor Classic Editor</h4>
                </CardHeader>
                <CardBody>
                  <Form method="post">
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Hello from CKEditor 5!</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormEditors;



// import React, { Component } from "react";
// import { Form, Card, CardBody, Col, Row, Container, CardHeader } from "reactstrap";

// // Form Editor
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// //Import Breadcrumb
// import Breadcrumbs from '../../components/Common/Breadcrumb';

// class FormEditors extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       breadcrumbItems: [
//         { title: "Forms", link: "#" },
//         { title: "Form Editors", link: "#" },
//       ],
//     }
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div className="page-content">
//           <Container fluid={true}>

//             <Breadcrumbs title="Form Editor" breadcrumbItems={this.state.breadcrumbItems} />

//             <Row>
//               <Col>
//               <Card>
//                 <CardHeader className="align-items-center d-flex">
//                   <h4 className="card-title mb-0">Ckeditor Classic Editor</h4>
//                 </CardHeader>
//                 <CardBody>
//                   <Form method="post">
//                     <CKEditor
//                       editor={ClassicEditor}
//                       data="<p>Hello from CKEditor 5!</p>"
//                       onReady={(editor) => {
//                         // You can store the "editor" and use when it is needed.
                        
//                       }}
//                     />
//                   </Form>
//                 </CardBody>
//               </Card>
//               </Col>
//             </Row>

//           </Container>
//         </div>
//       </React.Fragment>
//     );
//   };
// };

// export default FormEditors;
