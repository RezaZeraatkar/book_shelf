import React from "react";
import Header from "../components/Header/header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
}
