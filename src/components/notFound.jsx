import React from "react";
import { withRouter } from "react-router";

const NotFound = ({ location }) => {
  console.log(location);
  return <div>검색결과가 없습니다.</div>;
};

export default withRouter(NotFound);
