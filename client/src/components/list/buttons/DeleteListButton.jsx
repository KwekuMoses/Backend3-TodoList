import React from "react";
import styled from "styled-components";
import axios from "axios";

const Deletelistbutton = styled.button`
  background-color: #000000;
  color: white;
  width: 150px;
`;
export default function DeleteListButton(props) {
  const deleteList = (e) => {
    e.preventDefault();
    let this_list_id = props.list_id;
    console.log(this_list_id);
    console.log(e.target.parentNode);

    const payload = {
      id: this_list_id,
    };

    axios({
      url: "/deleteList",
      method: "DELETE",
      data: payload,
    })
      .then(() => {
        console.log("data been sent");
        window.location.href = "/";
      })
      .catch(() => {
        console.log("data been not sent");
      });
  };

  return <Deletelistbutton onClick={deleteList}>Delete List</Deletelistbutton>;
}
