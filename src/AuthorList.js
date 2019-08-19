import React from "react";

function AuthorList(props) {
  const authorsList = props.authors.map(auth => <AuthorCard author={auth} />);

  return <div>{authorsList}</div>;
}

export default AuthorList;
