import React from "react";
import Home from "./Home";
import Modal from "./Modal";
import { AppProvider } from "./context";

import Sidebar from "./SideBar";

function Setup() {
  return (
    <>
      <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
    </>
  );
}

export default Setup;
