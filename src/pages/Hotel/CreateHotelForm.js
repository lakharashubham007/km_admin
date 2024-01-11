import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Container, Label, Row } from 'reactstrap';
import { EmailInput, TelephoneInput, TextInput } from '../../components/Form/FormComponents';
import CkEditor from '../../components/Form/FormComponents/CkEditor';
import RadioButton from '../../components/Form/FormComponents/RadioButton';
import MultipleSelector from '../../components/Form/FormSelectorComponent/MultipleSelector';
import ChooseFileInput from '../../components/Form/FormComponents/ChooseFileInput';
import SelectorInput from '../../components/Form/FormSelectorComponent/SelectorInput';

const HotelCreateForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        alias: '',
        description: '',
        facilities: [],
        deals: [],
        destination: '',
        hotelClass: '',
        email: '',
        telephone: '',
        web: '',
        address: '',
        latitude: '',
        longitude: '',
        paypalEmail: '',
        releaseStatus: '',
        homepage: '',
        users: [],
        file: null,
    });

    const [selectedFacilities, setSelectedFacilities] = useState(null);
    const [selectedDeals, setSelectedDeals] = useState(null);
    const [selectedReleaseStatus, setSelectedReleaseStatus] = useState('');
    const [selectedHomepageStatus, setSelectedHomepageStatus] = useState('');
    const [selectedGroup, setSelectedGroup] = useState(null);

    const handleInputChange = (event, field) => {
        const { value } = event.target;
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({ ...prevData, file }));
    };

    const handleReleaseStatusChange = (value) => {
        setSelectedReleaseStatus(value);
        setFormData((prevData) => ({ ...prevData, releaseStatus: value }));
    };

    const handleHomepageStatusChange = (value) => {
        setSelectedHomepageStatus(value);
        setFormData((prevData) => ({ ...prevData, homepage: value }));
    };

    const handleSelectGroup = (selectedGroup) => {
        setSelectedGroup(selectedGroup);
        setFormData((prevData) => ({ ...prevData, destination: selectedGroup }));
    };

    const handleFacilitiesChange = (selectedFacilities) => {
        setSelectedFacilities(selectedFacilities);
        setFormData((prevData) => ({ ...prevData, facilities: selectedFacilities }));
    };

    const handleDealsChange = (selectedDeals) => {
        setSelectedDeals(selectedDeals);
        setFormData((prevData) => ({ ...prevData, deals: selectedDeals }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Replace 'https://your-api-endpoint.com' with your actual API endpoint URL
        const apiUrl = 'https://your-api-endpoint.com';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers required by your API
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success (e.g., redirect or show a success message)
                console.log('Form data sent successfully!');
            } else {
                // Handle error (e.g., show an error message)
                console.error('Failed to send form data');
            }
        } catch (error) {
            console.error('Error sending form data:', error);
        }
    };

    const facilitiesOptions = [
        {
            label: 'Basic',
            options: [
                { label: 'Free Wi-Fi', value: 'freeWiFi' },
                { label: 'Air Conditioning', value: 'airConditioning' },
                { label: 'Daily Housekeeping', value: 'dailyHousekeeping' },
            ],
        },
        {
            label: 'Food & Drink',
            options: [
                { label: 'Restaurant', value: 'restaurant' },
                { label: 'Bar/Lounge', value: 'barLounge' },
                { label: 'Room Service', value: 'roomService' },
            ],
        },
        {
            label: 'Recreation',
            options: [
                { label: 'Swimming Pool', value: 'swimmingPool' },
                { label: 'Fitness Center', value: 'fitnessCenter' },
                { label: 'Spa', value: 'spa' },
            ],
        },
    ];

    const dealsOptions = [
        { label: 'Limited-time Deal', value: 'limitedTimeDeal' },
        { label: 'Early24', value: 'early24' },
        { label: 'Buy-OneGetOne-Free ', value: 'buyOneGetOneFree' },
        { label: 'Discount-50%', value: 'discount-50' },
        // Add more deals as needed
    ];

    const releaseOptions = [
        { label: 'Published', value: 'published' },
        { label: 'Not published', value: 'notPublished' },
        { label: 'Awaiting', value: 'awaiting' },
        { label: 'Archived', value: 'archived' },
    ];

    const homePageOptions = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
    ];

    const optionGroup = [
        {
            label: 'Domestic',
            options: [
                { label: 'City A', value: 'cityA' },
                { label: 'City B', value: 'cityB' },
                { label: 'City C', value: 'cityC' },
            ],
        },
        {
            label: 'International',
            options: [
                { label: 'Country X', value: 'countryX' },
                { label: 'Country Y', value: 'countryY' },
                { label: 'Country Z', value: 'countryZ' },
            ],
        },
    ];

    return (
        <div className="page-content">
            <Card>
                <CardBody>
                    <Container fluid>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <Row>
                                <Col lg="6">
                                    {/* Title */}
                                    <TextInput
                                        label="Title"
                                        id="title-input"
                                        value={formData.title}
                                        onChange={(e) => handleInputChange(e, 'title')}
                                        placeholder="Enter Title"
                                    />
                                </Col>
                           

                          
                                <Col lg="6">
                                    {/* SubTitle */}
                                    <TextInput
                                        label="SubTitle"
                                        id="subtitle-input"
                                        value={formData.subtitle}
                                        onChange={(e) => handleInputChange(e, 'subtitle')}
                                        placeholder="Enter SubTitle"
                                    />
                                </Col>
                            
                                </Row>
                            {/* Alias */}
                            <Row>
                                <Col lg="6">
                                    <TextInput
                                        label="Alias"
                                        id="alias-input"
                                        value={formData.alias}
                                        onChange={(e) => handleInputChange(e, 'alias')}
                                        placeholder="Enter Alias"
                                    />
                                </Col>
                                 
                                  {/* Web */}
                                <Col lg="6">
                                    <TextInput
                                        label="Web"
                                        id="web-input"
                                        value={formData.web}
                                        onChange={(e) => handleInputChange(e, 'web')}
                                    />
                                </Col>

                             
                            </Row>

                            {/* Description */}
                            {/* <Row className="mb-3">
                                <Col lg="6">
                                    <CkEditor
                                        label="Description"
                                        id="ck-editor-input"
                                        value={formData.description}
                                        onChange={(value) =>
                                            setFormData((prevData) => ({ ...prevData, description: value }))
                                        }
                                        // Add any additional props or handlers required by the CKEditor component
                                    />
                                </Col>
                            </Row> */}

                            {/* Email */}
                            <Row>
                                <Col lg="6">
                                    <TextInput
                                        label="Email"
                                        id="email-input"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange(e, 'email')}
                                    />
                                </Col>
                            

                            {/* Telephone */}
                           
                                <Col lg="6">
                                    <TelephoneInput
                                        label="Mobile"
                                        id="telephone-input"
                                        value={formData.telephone}
                                        onChange={(e) => handleInputChange(e, 'telephone')}
                                    />
                                </Col>
                            </Row>

                           
                            <Row>
                            {/* Address */}
                           
                                <Col lg="6">
                                    <TextInput
                                        label="Address"
                                        id="address-input"
                                        value={formData.address}
                                        onChange={(e) => handleInputChange(e, 'address')}
                                    />
                                </Col>

                                  {/* Paypal Email */}
                                <Col lg="6">
                                    <EmailInput
                                        label="Paypal Email"
                                        id="paypal-email-input"
                                        value={formData.paypalEmail}
                                        onChange={(e) => handleInputChange(e, 'paypalEmail')}
                                    />
                                </Col>
                            </Row>

                            {/* Latitude */}
                            <Row>
                                <Col lg="6">
                                    <TextInput
                                        label="Latitude"
                                        id="lat-input"
                                        value={formData.latitude}
                                        onChange={(e) => handleInputChange(e, 'latitude')}
                                    />
                                </Col>
                          
                            {/* Longitude */}
                        
                                <Col lg="6">
                                    <TextInput
                                        label="Longitude"
                                        id="long-input"
                                        value={formData.longitude}
                                        onChange={(e) => handleInputChange(e, 'longitude')}
                                    />
                                </Col>
                            </Row>

                           
                            
                           <Row>
                                 <Col  lg="6">
                                 <CkEditor
                                        label="Description"
                                        id="ck-editor-input"
                                        value={formData.description}
                                        onChange={(value) =>
                                            setFormData((prevData) => ({ ...prevData, description: value }))
                                        }
                                        // Add any additional props or handlers required by the CKEditor component
                                    />
                                 </Col>

                                 <Col  lg="6">
                                     {/* Hotel Class */}
                                 <Row>
                                <Col lg="12">
                                    <Row>
                                        <Label className="col-2 col-form-label">Class</Label>
                                        <Col lg='2'>
                                            <RadioButton
                                                id="star1"
                                                name="hotelClass"
                                                label="1 Star"
                                                value="1Star"
                                                checked={formData.hotelClass === '1Star'}
                                                onChange={() =>
                                                    handleInputChange({ target: { value: '1Star' } }, 'hotelClass')
                                                }
                                            />
                                        </Col>
                                        <Col lg='2'>
                                            <RadioButton
                                                id="star2"
                                                name="hotelClass"
                                                label="2 Star"
                                                value="2Star"
                                                checked={formData.hotelClass === '2Star'}
                                                onChange={() =>
                                                    handleInputChange({ target: { value: '2Star' } }, 'hotelClass')
                                                }
                                            />
                                        </Col>
                                        <Col lg='2'>
                                            <RadioButton
                                                id="star3"
                                                name="hotelClass"
                                                label="3 Star"
                                                value="3Star"
                                                checked={formData.hotelClass === '3Star'}
                                                onChange={() =>
                                                    handleInputChange({ target: { value: '3Star' } }, 'hotelClass')
                                                }
                                            />
                                        </Col>
                                        <Col lg='2'>
                                            <RadioButton
                                                id="star4"
                                                name="hotelClass"
                                                label="4 Star"
                                                value="4Star"
                                                checked={formData.hotelClass === '4Star'}
                                                onChange={() =>
                                                    handleInputChange({ target: { value: '4Star' } }, 'hotelClass')
                                                }
                                            />
                                        </Col>
                                        <Col lg='2'>
                                            <RadioButton
                                                id="star5"
                                                name="hotelClass"
                                                label="5 Star"
                                                value="5Star"
                                                checked={formData.hotelClass === '5Star'}
                                                onChange={() =>
                                                    handleInputChange({ target: { value: '5Star' } }, 'hotelClass')
                                                }
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                 </Row>
                        

                          

                            {/* Release Status */}
                            <Row>
                                <Col lg="12">
                                    <Row>
                                        <Label className="col-2 col-form-label">Release</Label>
                                        {releaseOptions.map((option) => (
                                            <Col key={option.value} lg="2">
                                                <RadioButton
                                                    id={`release-${option.value}`}
                                                    name="releaseStatus"
                                                    label={option.label}
                                                    value={option.value}
                                                    checked={selectedReleaseStatus === option.value}
                                                    onChange={() => handleReleaseStatusChange(option.value)}
                                                    
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>

                            {/* Homepage Status */}
                            <Row>
                                <Col lg="12">
                                    <Row>
                                        <Label className="col-2 col-form-label">Homepage</Label>
                                        {homePageOptions.map((option) => (
                                            <Col key={option.value} lg="1">
                                                <RadioButton
                                                    id={`home-${option.value}`}
                                                    name="homeStatus"
                                                    label={option.label}
                                                    value={option.value}
                                                    checked={selectedHomepageStatus === option.value}
                                                    onChange={() => handleHomepageStatusChange(option.value)}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>

                                 
                                 </Col>

                           </Row>

                                
                            {/* Facilities */}
                            <Row>
                                <Col lg="6">
                                    <MultipleSelector
                                        label="Facilities"
                                        value={selectedFacilities}
                                        onChange={handleFacilitiesChange}
                                        options={facilitiesOptions}
                                    />
                                </Col>
                           
                                <Col lg="6">
                                    <MultipleSelector
                                        label="Deals"
                                        value={selectedDeals}
                                        onChange={handleDealsChange}
                                        options={dealsOptions}
                                    />
                                </Col>
                            </Row>

                            {/* Destination */}
                            <Row>
                                <Col lg="6">
                                    <SelectorInput
                                        label="Destination"
                                        value={selectedGroup}
                                        onChange={handleSelectGroup}
                                        options={optionGroup}
                                    />
                                </Col>
                            
                                <Col lg="6">
                                    <ChooseFileInput
                                        label="Choose file"
                                        id="inputGroupFile01"
                                        onChange={handleFileChange}
                                    />
                                </Col>
                            </Row>

                            {/* Submit Button */}
                            <Button type="submit" color="primary" className="me-1">
                                Submit
                            </Button>
                        </form>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};

export default HotelCreateForm;

//NEW CODE
// import React, { useState } from 'react';
// import { Button, Card, CardBody, Col, Container, Label, Row } from 'reactstrap';
// import { EmailInput, TelephoneInput, TextInput } from '../../components/Form/FormComponents';
// import CkEditor from '../../components/Form/FormComponents/CkEditor';
// import RadioButton from '../../components/Form/FormComponents/RadioButton';
// import MultipleSelector from '../../components/Form/FormSelectorComponent/MultipleSelector';
// import ChooseFileInput from '../../components/Form/FormComponents/ChooseFileInput';
// import SelectorInput from '../../components/Form/FormSelectorComponent/SelectorInput';

// const HotelCreateForm = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         subtitle: '',
//         alias: '',
//         description: '',
//         facilities: [],
//         deals: [],
//         destination: '',
//         hotelClass: '',
//         email: '',
//         telephone: '',
//         web: '',
//         address: '',
//         latitude: '',
//         longitude: '',
//         paypalEmail: '',
//         releaseStatus: '',
//         homepage: '',
//         users: [],
//         file: null,
//     });

//     const [selectedFacilities, setSelectedFacilities] = useState(null);
//     const [selectedDeals, setSelectedDeals] = useState(null);
//     const [selectedReleaseStatus, setSelectedReleaseStatus] = useState('');
//     const [selectedHomepageStatus, setSelectedHomepageStatus] = useState('');
//     const [selectedGroup, setSelectedGroup] = useState(null);

//     const handleInputChange = (event, field) => {
//         const { value } = event.target;
//         setFormData((prevData) => ({ ...prevData, [field]: value }));
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setFormData((prevData) => ({ ...prevData, file }));
//     };

//     const handleReleaseStatusChange = (value) => {
//         setSelectedReleaseStatus(value);
//         setFormData((prevData) => ({ ...prevData, releaseStatus: value }));
//     };

//     const handleHomepageStatusChange = (value) => {
//         setSelectedHomepageStatus(value);
//         setFormData((prevData) => ({ ...prevData, homepage: value }));
//     };

//     const handleSelectGroup = (selectedGroup) => {
//         setSelectedGroup(selectedGroup);
//         setFormData((prevData) => ({ ...prevData, destination: selectedGroup }));
//     };

//     const handleFacilitiesChange = (selectedFacilities) => {
//         setSelectedFacilities(selectedFacilities);
//         setFormData((prevData) => ({ ...prevData, facilities: selectedFacilities }));
//     };

//     const handleDealsChange = (selectedDeals) => {
//         setSelectedDeals(selectedDeals);
//         setFormData((prevData) => ({ ...prevData, deals: selectedDeals }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Replace 'https://your-api-endpoint.com' with your actual API endpoint URL
//         const apiUrl = 'https://your-api-endpoint.com';

//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // Add any additional headers required by your API
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 // Handle success (e.g., redirect or show a success message)
//                 console.log('Form data sent successfully!');
//             } else {
//                 // Handle error (e.g., show an error message)
//                 console.error('Failed to send form data');
//             }
//         } catch (error) {
//             console.error('Error sending form data:', error);
//         }
//     };

//     const facilitiesOptions = [
//         {
//             label: 'Basic',
//             options: [
//                 { label: 'Free Wi-Fi', value: 'freeWiFi' },
//                 { label: 'Air Conditioning', value: 'airConditioning' },
//                 { label: 'Daily Housekeeping', value: 'dailyHousekeeping' },
//             ],
//         },
//         {
//             label: 'Food & Drink',
//             options: [
//                 { label: 'Restaurant', value: 'restaurant' },
//                 { label: 'Bar/Lounge', value: 'barLounge' },
//                 { label: 'Room Service', value: 'roomService' },
//             ],
//         },
//         {
//             label: 'Recreation',
//             options: [
//                 { label: 'Swimming Pool', value: 'swimmingPool' },
//                 { label: 'Fitness Center', value: 'fitnessCenter' },
//                 { label: 'Spa', value: 'spa' },
//             ],
//         },
//     ];

//     const dealsOptions = [
//         { label: 'Limited-time Deal', value: 'limitedTimeDeal' },
//         { label: 'Early24', value: 'early24' },
//         { label: 'Buy-OneGetOne-Free ', value: 'buyOneGetOneFree' },
//         { label: 'Discount-50%', value: 'discount-50' },
//         // Add more deals as needed
//     ];

//     const releaseOptions = [
//         { label: 'Published', value: 'published' },
//         { label: 'Not published', value: 'notPublished' },
//         { label: 'Awaiting', value: 'awaiting' },
//         { label: 'Archived', value: 'archived' },
//     ];

//     const homePageOptions = [
//         { label: 'Yes', value: 'yes' },
//         { label: 'No', value: 'no' },
//     ];

//     const optionGroup = [
//         {
//             label: 'Domestic',
//             options: [
//                 { label: 'City A', value: 'cityA' },
//                 { label: 'City B', value: 'cityB' },
//                 { label: 'City C', value: 'cityC' },
//             ],
//         },
//         {
//             label: 'International',
//             options: [
//                 { label: 'Country X', value: 'countryX' },
//                 { label: 'Country Y', value: 'countryY' },
//                 { label: 'Country Z', value: 'countryZ' },
//             ],
//         },
//     ];

//     return (
//         <div className="page-content">
//             <Card>
//                 <CardBody>
//                     <Container fluid>
//                         <form onSubmit={handleSubmit} encType="multipart/form-data">
//                             <Row>
//                                 <Col lg="8">
//                                     {/* Title */}
//                                     <TextInput
//                                         label="Title"
//                                         id="title-input"
//                                         value={formData.title}
//                                         onChange={(e) => handleInputChange(e, 'title')}
//                                         placeholder="Enter Title"
//                                     />
//                                 </Col>
//                             </Row>

//                             <Row>
//                                 <Col lg="8">
//                                     {/* SubTitle */}
//                                     <TextInput
//                                         label="SubTitle"
//                                         id="subtitle-input"
//                                         value={formData.subtitle}
//                                         onChange={(e) => handleInputChange(e, 'subtitle')}
//                                         placeholder="Enter SubTitle"
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Alias */}
//                             <Row>
//                                 <Col lg="8">
//                                     <TextInput
//                                         label="Alias"
//                                         id="alias-input"
//                                         value={formData.alias}
//                                         onChange={(e) => handleInputChange(e, 'alias')}
//                                         placeholder="Enter Alias"
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Description */}
//                             <Row className="mb-3">
//                                 <Col lg="8">
//                                     <CkEditor
//                                         label="Description"
//                                         id="ck-editor-input"
//                                         value={formData.description}
//                                         onChange={(value) =>
//                                             setFormData((prevData) => ({ ...prevData, description: value }))
//                                         }
//                                         // Add any additional props or handlers required by the CKEditor component
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Email */}
//                             <Row>
//                                 <Col lg="8">
//                                     <EmailInput
//                                         label="Email"
//                                         id="email-input"
//                                         value={formData.email}
//                                         onChange={(e) => handleInputChange(e, 'email')}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Telephone */}
//                             <Row>
//                                 <Col lg="8">
//                                     <TelephoneInput
//                                         label="Mobile"
//                                         id="telephone-input"
//                                         value={formData.telephone}
//                                         onChange={(e) => handleInputChange(e, 'telephone')}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Web */}
//                             <Row>
//                                 <Col lg="8">
//                                     <TextInput
//                                         label="Web"
//                                         id="web-input"
//                                         value={formData.web}
//                                         onChange={(e) => handleInputChange(e, 'web')}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Address */}
//                             <Row>
//                                 <Col lg="8">
//                                     <TextInput
//                                         label="Address"
//                                         id="address-input"
//                                         value={formData.address}
//                                         onChange={(e) => handleInputChange(e, 'address')}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Latitude */}
//                             <Row>
//                                 <Col lg="8">
//                                     <TextInput
//                                         label="Latitude"
//                                         id="lat-input"
//                                         value={formData.latitude}
//                                         onChange={(e) => handleInputChange(e, 'latitude')}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Longitude */}
//                             <Row>
//                                 <Col lg="8">
//                                     <TextInput
//                                         label="Longitude"
//                                         id="long-input"
//                                         value={formData.longitude}
//                                         onChange={(e) => handleInputChange(e, 'longitude')}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Paypal Email */}
//                             <Row>
//                                 <Col lg="8">
//                                     <EmailInput
//                                         label="Paypal Email"
//                                         id="paypal-email-input"
//                                         value={formData.paypalEmail}
//                                         onChange={(e) => handleInputChange(e, 'paypalEmail')}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Hotel Class */}
//                             <Row>
//                                 <Col lg="8">
//                                     <Row>
//                                         <Label className="col-2 col-form-label">Class</Label>
//                                         <Col lg='1'>
//                                             <RadioButton
//                                                 id="star1"
//                                                 name="hotelClass"
//                                                 label="1 Star"
//                                                 value="1Star"
//                                                 checked={formData.hotelClass === '1Star'}
//                                                 onChange={() =>
//                                                     handleInputChange({ target: { value: '1Star' } }, 'hotelClass')
//                                                 }
//                                             />
//                                         </Col>
//                                         <Col lg='1'>
//                                             <RadioButton
//                                                 id="star2"
//                                                 name="hotelClass"
//                                                 label="2 Star"
//                                                 value="2Star"
//                                                 checked={formData.hotelClass === '2Star'}
//                                                 onChange={() =>
//                                                     handleInputChange({ target: { value: '2Star' } }, 'hotelClass')
//                                                 }
//                                             />
//                                         </Col>
//                                         <Col lg='1'>
//                                             <RadioButton
//                                                 id="star3"
//                                                 name="hotelClass"
//                                                 label="3 Star"
//                                                 value="3Star"
//                                                 checked={formData.hotelClass === '3Star'}
//                                                 onChange={() =>
//                                                     handleInputChange({ target: { value: '3Star' } }, 'hotelClass')
//                                                 }
//                                             />
//                                         </Col>
//                                         <Col lg='1'>
//                                             <RadioButton
//                                                 id="star4"
//                                                 name="hotelClass"
//                                                 label="4 Star"
//                                                 value="4Star"
//                                                 checked={formData.hotelClass === '4Star'}
//                                                 onChange={() =>
//                                                     handleInputChange({ target: { value: '4Star' } }, 'hotelClass')
//                                                 }
//                                             />
//                                         </Col>
//                                         <Col lg='1'>
//                                             <RadioButton
//                                                 id="star5"
//                                                 name="hotelClass"
//                                                 label="5 Star"
//                                                 value="5Star"
//                                                 checked={formData.hotelClass === '5Star'}
//                                                 onChange={() =>
//                                                     handleInputChange({ target: { value: '5Star' } }, 'hotelClass')
//                                                 }
//                                             />
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                             </Row>

//                             {/* Release Status */}
//                             <Row>
//                                 <Col lg="8">
//                                     <Row>
//                                         <Label className="col-2 col-form-label">Release</Label>
//                                         {releaseOptions.map((option) => (
//                                             <Col key={option.value} lg="1">
//                                                 <RadioButton
//                                                     id={`release-${option.value}`}
//                                                     name="releaseStatus"
//                                                     label={option.label}
//                                                     value={option.value}
//                                                     checked={selectedReleaseStatus === option.value}
//                                                     onChange={() => handleReleaseStatusChange(option.value)}
//                                                 />
//                                             </Col>
//                                         ))}
//                                     </Row>
//                                 </Col>
//                             </Row>

//                             {/* Homepage Status */}
//                             <Row>
//                                 <Col lg="8">
//                                     <Row>
//                                         <Label className="col-2 col-form-label">Homepage</Label>
//                                         {homePageOptions.map((option) => (
//                                             <Col key={option.value} lg="1">
//                                                 <RadioButton
//                                                     id={`home-${option.value}`}
//                                                     name="homeStatus"
//                                                     label={option.label}
//                                                     value={option.value}
//                                                     checked={selectedHomepageStatus === option.value}
//                                                     onChange={() => handleHomepageStatusChange(option.value)}
//                                                 />
//                                             </Col>
//                                         ))}
//                                     </Row>
//                                 </Col>
//                             </Row>

//                             {/* Facilities */}
//                             <Row>
//                                 <Col lg="8">
//                                     <MultipleSelector
//                                         label="Facilities"
//                                         value={selectedFacilities}
//                                         onChange={handleFacilitiesChange}
//                                         options={facilitiesOptions}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Deals */}
//                             <Row>
//                                 <Col lg="8">
//                                     <MultipleSelector
//                                         label="Deals"
//                                         value={selectedDeals}
//                                         onChange={handleDealsChange}
//                                         options={dealsOptions}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Destination */}
//                             <Row>
//                                 <Col lg="8">
//                                     <SelectorInput
//                                         label="Destination"
//                                         value={selectedGroup}
//                                         onChange={handleSelectGroup}
//                                         options={optionGroup}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Choose File */}
//                             <Row>
//                                 <Col lg="8">
//                                     <ChooseFileInput
//                                         label="Choose file"
//                                         id="inputGroupFile01"
//                                         onChange={handleFileChange}
//                                     />
//                                 </Col>
//                             </Row>

//                             {/* Submit Button */}
//                             <Button type="submit" color="primary" className="me-1">
//                                 Submit
//                             </Button>
//                         </form>
//                     </Container>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// export default HotelCreateForm;


//LAST UPDATED CODE WITH API
// import React, { useState } from 'react';
// import { Button, Card, CardBody, Col, Container, Label, Row } from 'reactstrap';
// import { EmailInput, TelephoneInput, TextInput } from '../../components/Form/FormComponents';
// import CkEditor from '../../components/Form/FormComponents/CkEditor';
// import RadioButton from '../../components/Form/FormComponents/RadioButton';
// import MultipleSelector from '../../components/Form/FormSelectorComponent/MultipleSelector';
// import ChooseFileInput from '../../components/Form/FormComponents/ChooseFileInput';
// import SelectorInput from '../../components/Form/FormSelectorComponent/SelectorInput';

// const HotelCreateForm = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         subtitle: '',
//         alias: '',
//         description: '',
//         facilities: [],
//         tags: [],
//         destination: '',
//         hotelClass: '',
//         email: '',
//         telephone: '',
//         web: '',
//         address: '',
//         latitude: '',
//         longitude: '',
//         paypalEmail: '',
//         releaseStatus: '',
//         homepage: '',
//         users: [],
//         file: null,
//     });

    


//     const [selectedFacilities, setSelectedFacilities] = useState(null);
//     const [selectedTags, setSelectedTags] = useState(null);

//     const handleFacilitiesChange = (selectedFacilities) => {
//         setSelectedFacilities(selectedFacilities);
//         setFormData((prevData) => ({ ...prevData, facilities: selectedFacilities }));
//     };

//     const handleTagsChange = (selectedTags) => {
//         setSelectedTags(selectedTags);
//         setFormData((prevData) => ({ ...prevData, facilities: selectedTags }));
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Replace 'https://your-api-endpoint.com' with your actual API endpoint URL
//         const apiUrl = 'https://your-api-endpoint.com';

//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // Add any additional headers required by your API
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 // Handle success (e.g., redirect or show a success message)
//                 console.log('Form data sent successfully!');
//             } else {
//                 // Handle error (e.g., show an error message)
//                 console.error('Failed to send form data');
//             }
//         } catch (error) {
//             console.error('Error sending form data:', error);
//         }
//     };

//     const handleInputChange = (event, field) => {
//         const { value } = event.target;
//         setFormData((prevData) => ({ ...prevData, [field]: value }));
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setFormData((prevData) => ({ ...prevData, file }));
//     };

//     const [selectedReleaseStatus, setSelectedReleaseStatus] = useState('');
//     const [selectedHomepageStatus, setSelectedHomepageStatus] = useState('');

//     const handleReleaseStatusChange = (value) => {
//         setSelectedReleaseStatus(value);
//         setFormData((prevData) => ({ ...prevData, releaseStatus: value }));
//     };

//     const releaseOptions = [
//         { label: 'Published', value: 'published' },
//         { label: 'Not published', value: 'notPublished' },
//         { label: 'Awaiting', value: 'awaiting' },
//         { label: 'Archived', value: 'archived' },
//     ];

//     const homePageOptions = [
//         { label: 'Yes', value: 'yes' },
//         { label: 'No', value: 'no' },
//     ];
   
//     const handleHomepageStatusChange = (value) => {
//         setSelectedHomepageStatus(value);
//         setFormData((prevData) => ({ ...prevData, releaseStatus: value }));
//     };

//     const [selectedGroup, setSelectedGroup] = useState(null);

//     const handleSelectGroup = (selectedGroup) => {
//         setSelectedGroup(selectedGroup);
//         setFormData((prevData) => ({ ...prevData, destination: selectedGroup }));
//     };

    
//     const facilitiesOptions = [
//         {
//             label: 'Basic',
//             options: [
//                 { label: 'Free Wi-Fi', value: 'freeWiFi' },
//                 { label: 'Air Conditioning', value: 'airConditioning' },
//                 { label: 'Daily Housekeeping', value: 'dailyHousekeeping' },
//             ],
//         },
//         {
//             label: 'Food & Drink',
//             options: [
//                 { label: 'Restaurant', value: 'restaurant' },
//                 { label: 'Bar/Lounge', value: 'barLounge' },
//                 { label: 'Room Service', value: 'roomService' },
//             ],
//         },
//         {
//             label: 'Recreation',
//             options: [
//                 { label: 'Swimming Pool', value: 'swimmingPool' },
//                 { label: 'Fitness Center', value: 'fitnessCenter' },
//                 { label: 'Spa', value: 'spa' },
//             ],
//         },
//     ];

//     const dealsOptions = [
//         { label: 'Limited-time Deal', value: 'limitedTimeDeal' },
//         { label: 'Early24', value: 'early24' },
//         { label: 'Buy-OneGetOne-Free ', value: 'buyOneGetOneFree' },
//         { label: 'Discount-50%', value: 'discount-50' },
//         // Add more deals as needed
//     ];

//     const optionGroup = [
//         {
//             label: 'Domestic',
//             options: [
//                 { label: 'City A', value: 'cityA' },
//                 { label: 'City B', value: 'cityB' },
//                 { label: 'City C', value: 'cityC' },
//             ],
//         },
//         {
//             label: 'International',
//             options: [
//                 { label: 'Country X', value: 'countryX' },
//                 { label: 'Country Y', value: 'countryY' },
//                 { label: 'Country Z', value: 'countryZ' },
//             ],
//         },
//     ];

//     return (
//         <div className="page-content">
//             <Card>
//             <CardBody>
//             <Container fluid>
//                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                     <Row>
//                         <Col lg="8">
//                             <TextInput
//                                 label="Title"
//                                 id="title-input"
//                                 value={formData.title}
//                                 onChange={(e) => handleInputChange(e, 'title')}
//                                 placeholder="Enter Title"
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <TextInput
//                                 label="SubTitle"
//                                 id="subtitle-input"
//                                 value={formData.subtitle}
//                                 onChange={(e) => handleInputChange(e, 'subtitle')}
//                                 placeholder="Enter SubTitle"
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <TextInput
//                                 label="Alias"
//                                 id="alias-input"
//                                 value={formData.alias}
//                                 onChange={(e) => handleInputChange(e, 'alias')}
//                                 placeholder="Enter Alias"
//                             />
//                         </Col>
//                     </Row>

//                     <Row className="mb-3">
//                         <Col lg="8">
//                             <CkEditor
//                                 label="Description"
//                                 id="ck-editor-input"
//                                 value={formData.description}
//                                 onChange={(value) => setFormData((prevData) => ({ ...prevData, description: value }))}
//                                 // Add any additional props or handlers required by the CKEditor component
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <EmailInput
//                                 label="Email"
//                                 id="email-input"
//                                 value={formData.email}
//                                 onChange={(e) => handleInputChange(e, 'email')}
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <TelephoneInput
//                                 label="Mobile"
//                                 id="telephone-input"
//                                 value={formData.telephone}
//                                 onChange={(e) => handleInputChange(e, 'telephone')}
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <TextInput
//                                 label="Web"
//                                 id="web-input"
//                                 value={formData.web}
//                                 onChange={(e) => handleInputChange(e, 'web')}
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <TextInput
//                                 label="Address"
//                                 id="address-input"
//                                 value={formData.address}
//                                 onChange={(e) => handleInputChange(e, 'address')}
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <TextInput
//                                 label="Latitude"
//                                 id="lat-input"
//                                 value={formData.latitude}
//                                 onChange={(e) => handleInputChange(e, 'latitude')}
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <TextInput
//                                 label="Longitude"
//                                 id="long-input"
//                                 value={formData.longitude}
//                                 onChange={(e) => handleInputChange(e, 'longitude')}
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <EmailInput
//                                 label="Paypal Email"
//                                 id="paypal-email-input"
//                                 value={formData.paypalEmail}
//                                 onChange={(e) => handleInputChange(e, 'paypalEmail')}
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <Row>
//                                 <Label className="col-2 col-form-label">
//                                     Class
//                                 </Label>

//                                 <Col lg='1'>
//                                     <RadioButton
//                                         id="star1"
//                                         name="hotelClass"
//                                         label="1 Star"
//                                         value="1Star"
//                                         checked={formData.hotelClass === '1Star'}
//                                         onChange={() => handleInputChange({ target: { value: '1Star' } }, 'hotelClass')}
//                                     />
//                                 </Col>

//                                 <Col lg='1'>
//                                     <RadioButton
//                                         id="star2"
//                                         name="hotelClass"
//                                         label="2 Star"
//                                         value="2Star"
//                                         checked={formData.hotelClass === '2Star'}
//                                         onChange={() => handleInputChange({ target: { value: '2Star' } }, 'hotelClass')}
//                                     />
//                                 </Col>

//                                 <Col lg='1'>
//                                     <RadioButton
//                                         id="star3"
//                                         name="hotelClass"
//                                         label="3 Star"
//                                         value="3Star"
//                                         checked={formData.hotelClass === '3Star'}
//                                         onChange={() => handleInputChange({ target: { value: '3Star' } }, 'hotelClass')}
//                                     />
//                                 </Col>

//                                 <Col lg='1'>
//                                     <RadioButton
//                                         id="star4"
//                                         name="hotelClass"
//                                         label="4 Star"
//                                         value="4Star"
//                                         checked={formData.hotelClass === '4Star'}
//                                         onChange={() => handleInputChange({ target: { value: '4Star' } }, 'hotelClass')}
//                                     />
//                                 </Col>

//                                 <Col lg='1'>
//                                     <RadioButton
//                                         id="star5"
//                                         name="hotelClass"
//                                         label="5 Star"
//                                         value="5Star"
//                                         checked={formData.hotelClass === '5Star'}
//                                         onChange={() => handleInputChange({ target: { value: '5Star' } }, 'hotelClass')}
//                                     />
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>

                

//                     <Row>
//                         <Col lg="8">
//                             <Row>
//                             <Label className="col-2 col-form-label">Release</Label>
//                             {releaseOptions.map((option) => (
//                                 <Col key={option.value} lg="1">
//                                     <RadioButton
//                                         id={`release-${option.value}`}
//                                         name="releaseStatus"
//                                         label={option.label}
//                                         value={option.value}
//                                         checked={selectedReleaseStatus === option.value}
//                                         onChange={() => handleReleaseStatusChange(option.value)}
//                                     />
//                                 </Col>
//                             ))}
//                             </Row>
//                         </Col>
//                     </Row>

                   
//                     <Row>
//                         <Col lg="8">
//                             <Row>
//                             <Label className="col-2 col-form-label">Homepage</Label>
//                             {homePageOptions.map((option) => (
//                                 <Col key={option.value} lg="1">
//                                     <RadioButton
//                                         id={`home-${option.value}`}
//                                         name="homeStatus"
//                                         label={option.label}
//                                         value={option.value}
//                                         checked={selectedHomepageStatus === option.value}
//                                         onChange={() => handleHomepageStatusChange(option.value)}
//                                     />
//                                 </Col>
//                             ))}
//                             </Row>
//                         </Col>
//                     </Row>


                    
//                     <Row>
//                         <Col lg="8">
//                             <MultipleSelector
//                                 label="Facilities"
//                                 value={selectedFacilities}
//                                 onChange={handleFacilitiesChange}
//                                 options={facilitiesOptions}
                               
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <MultipleSelector
//                                 label="Deals"
//                                 value={selectedTags}
//                                 onChange={handleTagsChange}
//                                 options={dealsOptions}
                               
//                             />
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col lg="8">
//                             <SelectorInput
//                                 label="Destination"
//                                 value={selectedGroup}
//                                 onChange={handleSelectGroup}
//                                 options={optionGroup}
//                             />
//                         </Col>
//                     </Row>

//                     <Row>

//                         <Col lg="8">
//                             <ChooseFileInput
//                                 label="Choose file"
//                                 id="inputGroupFile01"
//                                 onChange={handleFileChange}
//                             />
//                         </Col>
//                     </Row>

//                     <Button type="submit" color="primary" className="me-1">Submit</Button>
//                 </form>
//             </Container>
//             </CardBody>
//             </Card>
//         </div>
     
//     );
// };

// export default HotelCreateForm;
