import React, { useState } from 'react';
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import SubHeader from '../../components/Common/SubHeader';
import { TextInput, EmailInput, PasswordInput } from '../../components/Form/FormComponents';
import { formsField } from '../../common/data/formData';

const componentMap = {
  text: TextInput,
  email: EmailInput,
  password: PasswordInput,
  // Add more mappings for other field types as needed
};

const HotelCreateForm = () => {
  const [breadcrumbItems] = useState([
    { title: "KingMajesty", link: "/" },
    { title: "Create Hotel", link: "#" },
  ]);

  console.log(formsField);

  return (
    <div className="page-content">
      <div className="hotel-create-form">
        <Container fluid>
          <Breadcrumbs title="Create Hotel" breadcrumbItems={breadcrumbItems} />
          <Card>
            <CardBody>
              <Row>
                {formsField.map((field) => {
                  const CommonComponent = componentMap[field.fieldType.toLowerCase()];
                  if (CommonComponent) {
                    const commonProps = {
                      label: field.fieldName,
                      id: `hotel-${field.fieldName.replace(/\s+/g, '-').toLowerCase()}`,
                      defaultValue: '',
                    };
                    return (
                      <Col md="6" key={field.id}>
                        <CommonComponent {...commonProps} />
                      </Col>
                    );
                  }
                  return null;
                })}
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default HotelCreateForm;