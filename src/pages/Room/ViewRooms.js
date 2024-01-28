

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useMemo } from "react";
import TableContainer from "../../components/Common/TableContainer";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import ConfirmationModal from "../../components/Common/ConfirmationModal";

const ViewRooms = () => {
  const [facilities, setFacilities] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control the delete confirmation modal
 
  const [rooms, setRooms] = useState([]);
  console.log(rooms);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Fetch data from your API endpoint
        const response = await fetch("http://localhost:8086/v1/rm/rooms/get-rooms");
        const data = await response.json();
        setRooms(data.rooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);


  const columns = useMemo(
    () => [
      {
        
        Header: () => (
          <div>
             
          <input
            type="checkbox"
            onChange={(e) => {
              const isChecked = e.target.checked;
              const newSelectedFacilities = isChecked
                ? facilities.map((facility) => facility._id)
                : [];
              setSelectedFacilities(newSelectedFacilities);
            }}
            checked={
              selectedFacilities.length === facilities.length &&
              facilities.length !== 0
            }
          />
           {/* <span> Select All</span>  */}
          </div>
        ),
        accessor: "_id",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            onChange={() => {
              const newSelectedFacilities = [...selectedFacilities];
              if (newSelectedFacilities.includes(row.original._id)) {
                newSelectedFacilities.splice(
                  newSelectedFacilities.indexOf(row.original._id),
                  1
                );
              } else {
                newSelectedFacilities.push(row.original._id);
              }
              setSelectedFacilities(newSelectedFacilities);
            }}
            checked={selectedFacilities.includes(row.original._id)}
          />
        ),
        id: "checkbox", // Add a unique ID for the checkbox column
        disableFilters: true,
        filterable: false,
        disableSortBy: true,
        show: false,
        
      },

      {
        Header: "ID",
        accessor: (originalRow, index) => index + 1, // Display serial number
        disableFilters: true,
        filterable: false,
      },
      // {
      //   Header: "ID",
      //   accessor: "_id",
      //   disableFilters: true,
      //   filterable: false,
       
      // },
      {
        Header: "Image",
        accessor: "thumbnail",
        disableFilters: true,
        filterable: false,
        Cell: ({ cell: { value } }) => (
          
          <div style={{ width: "150px", height: "80px" }}>
          <img 
                      src={`http://localhost:8086/v1/img/get-Images/image/${value}`}
                      style={{ width: "100%", height: "100%", objectFit: "fit" }}
                       alt="img" />
            {/* <img src={value} alt="Img" style={{ width: "100%", height: "100%", objectFit: "fit" }} /> */}
          </div>
        ),
      },
      {
        Header: "Name",
        accessor: "RoomCategory",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Action",
        accessor: (cellProps) => (
          <React.Fragment>
            <Link
              to="#"
              className="me-3 text-primary"
            >
              <i className="mdi mdi-pencil font-size-18"></i>
            </Link>
            <Link
              to="#"
              className="text-danger"
              onClick={() => handleDeleteClick(cellProps.original)}
            >
              <i className="mdi mdi-trash-can font-size-18"></i>
            </Link>
          </React.Fragment>
        ),
        disableFilters: true,
        filterable: false,
        disableSortBy: true,
      },
    ],
    [selectedFacilities, facilities]
  );

  const breadcrumbItems = [
    { title: "Rooms", link: "/" },
    { title: "ViewRooms List", link: "#" },
  ];

  const navigate = useNavigate();
  const handleFacilityClick = () => {
    navigate("/room/create");
  };

  const handleDeleteClick = () => {
    // Show the delete confirmation modal when the delete link is clicked
    setShowDeleteModal(true);
  };
  const handleDeleteConfirm = () => {
    // Handle the delete confirmation
    // Perform your delete logic here
    console.log("Deleting selected facilities:", selectedFacilities);

    // Close the confirmation modal
    setShowDeleteModal(false);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Rooms" breadcrumbItems={breadcrumbItems} />
          <Card>
            <CardBody>
      
              <TableContainer
                columns={columns || []}
                data={rooms || []}
                isPagination={false}
                iscustomPageSize={false}
                isBordered={false}
                isGlobalFilter={true}
                isAddFacility={true}
                handleFacilityClick={handleFacilityClick}
                label={"Create New Rooms"}
                customPageSize={5}
                className="custom-header-css table align-middle table-nowrap"
                tableClassName="table-centered align-middle table-nowrap mb-0"
                theadClassName="text-muted table-light"
              />

              <ConfirmationModal
                isOpen={showDeleteModal}
                toggle={() => setShowDeleteModal(!showDeleteModal)}
                onConfirm={handleDeleteConfirm}
                message="Are you sure you want to delete the selected facilities?"
              />
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ViewRooms;

