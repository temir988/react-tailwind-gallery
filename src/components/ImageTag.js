import React from "react";

const ImageTag = ({ tagName }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      {tagName}
    </span>
  );
};

export default ImageTag;
