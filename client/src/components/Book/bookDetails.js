import React from "react";
import { useParams } from "react-router-dom";
import BookContainer from "../../containers/bookContainer";

export default function BookDetails() {
  let { id } = useParams();
  return <BookContainer id={id} />;
}
