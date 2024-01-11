import React from "react";
import RatingTooltip from "react-rating-tooltip";
import { Label } from "reactstrap";

const HalfRatingInput = ({ onChange, value , label}) => {

   
  return (
    <div  className="d-flex align-items-center ">
    <Label className="col-2 col-form-label">{label}</Label>
    <RatingTooltip
       
      max={5}
      onChange={onChange}
      ActiveComponent={
        <i
          active={"active_12"}
          className="mdi mdi-star text-primary"
          style={{ fontSize: "34px", margin: "0 12px",   }}
          
        />
      }
      InActiveComponent={
        <i
          active={"active_12"}
          className="mdi mdi-star-outline text-primary"
          style={{ fontSize: "34px", margin: "0 12px", }} 
        />
      }
      value={value}
    />
    </div>
  );
};

export default HalfRatingInput;
