import React from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import { useEffect } from "react";
function Header() {
  function suuuc() {
    return toast.info("Click on Item to mark/unmark completed", {
      position: "top-right",
      autoClose: 6500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Slide,
      rtl: false,
    });
  }
  useEffect(() => {
    suuuc();
  }, []);
  return (
    <header>
      <ToastContainer />
      <h1>To-Do App</h1>
    </header>
  );
}

export default Header;
