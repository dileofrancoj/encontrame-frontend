import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading: React.FC = () => {
  return <ClipLoader color="tomato" css={override} size={150} />;
};

export default Loading;
