import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const authorsList = props.authors.map(auth => <AuthorCard author={auth} />);

  return <div>{authorsList}</div>;
}

export default AuthorList;
