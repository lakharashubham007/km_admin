import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { withTranslation } from "react-i18next";

const Breadcrumbs = ({ t, title, breadcrumbItems }) => {
    const itemsLength = breadcrumbItems.length;

    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0">{t(title)}</h4>

                        <div className="page-title-right">
                            <Breadcrumb listClassName="m-0">
                                {breadcrumbItems.map((item, key) =>
                                    key + 1 === itemsLength ?
                                        <BreadcrumbItem key={key} active>{t(item.title)}</BreadcrumbItem>
                                        : <BreadcrumbItem key={key}><Link to={item.link}>{t(item.title)}</Link></BreadcrumbItem>
                                )}
                            </Breadcrumb>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default withTranslation()(Breadcrumbs);
