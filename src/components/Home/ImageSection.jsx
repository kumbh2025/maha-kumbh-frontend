import React from "react";

const ImageSection = ({ src, alt }) => (
  <div className="hidden lg:block w-1/3">
    <img
      src={src}
      alt={alt}
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
);

export default ImageSection;
