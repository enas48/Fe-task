import React from "react";
import Header from "../Header";

import Sidebar from "../Sidebar";

function MainLayout(props: any) {
  return (
    <>
      <div className=" d-flex">
        <Sidebar />
        <div className="d-flex flex-column">
          <Header />
          <div className="content d-flex flex-column ">{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
