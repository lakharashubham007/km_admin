/* eslint-disable jsx-a11y/img-redundant-alt */
// ImageViewer.js
import React from "react";
import defaultImage from "../../../assets/images/gal4.png"; // Replace with the actual path to your default image
import "./ImageViewer.css"; // Import your CSS file for styling

const ImageViewer = ({ files,onRemoveFile}) => {
  const removeFile = (index) => {
    if (Array.isArray(files)) {
      const updatedFiles = [...files];
      updatedFiles.splice(index, 1);
      onRemoveFile(updatedFiles);
    } else {
      // If it's a single file, just clear it by passing null to the callback
      onRemoveFile(null);
    }
  };
  
  if (!Array.isArray(files)) {
    files = [files];
  }

  return (
    <div className="image-viewer-container">
      {files.map((file, index) => (
        <div key={index} className="image-item">
          <img
            src={file instanceof Blob ? URL.createObjectURL(file) : defaultImage}
            alt={`Selected Image ${index + 1}`}
            className="img-thumbnail"
          />
           <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={() => removeFile(index)}
          >
            Remove
          </button>
        </div>
      ))}
      {files.length === 0 && (
        <div className="image-item">
          <img
            src={defaultImage}
            alt="Default Image"
            className="img-thumbnail"
          />
        </div>
      )}
    </div>
  );
};

export default ImageViewer;