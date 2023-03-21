// import React from 'react'

// const addaboutpage = () => {
//   return (
//     <div>addaboutpage</div>
//   )
// }

// export default addaboutpage
import { useTheme } from "@emotion/react";
import { useGridApiEventHandler } from "@mui/x-data-grid";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addaboutpage } from "../../redux/aboutpageRedux"
import { addAboutpage } from "../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import FileBase64 from 'react-file-base64';

import Header from "../../components/Header";

const Addaboutpage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  // const [rating , setRating] = useState({});
  // const [price , setPrice] = useState();
  // const [discription , setDiscription] = useState();
  const [image , setImage] = useState();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(inputs);

  // const handleRating = (e) => {
  //   setRating(e.target.value.split(","));
  // };

  // const handlePrice = (e) => {
  //   setPrice(e.target.value.split(","));
  // };

  // const handleDiscription = (e) => {
  //   setDiscription(e.target.value.split(","));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const addaboutpage = {
      ...inputs,
    };
    console.log(addaboutpage);
    addAboutpage(addaboutpage, dispatch);
    toast.success("devloper Added Successfully!");
  };

  return (
    <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
      <Header title={`ADD SPA & MASSAGE`} subtitle="Create New  Services " />
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      >
      {/* <FileBase64   
        multiple={ false }
        onDone={({ base64 }) => setImage({...
        image, image: base64 })} />&nbsp; */}
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Image"
          name="image"
          sx={{ gridColumn: "span 2" }}
          required
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Name"
          name="name"
          sx={{ gridColumn: "span 2" }}
          required
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          name="email"
          sx={{ gridColumn: "span 1" }}
          required
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="filled"
          type="number"
          label="Number"
          name="phonenumber"
          sx={{ gridColumn: "span 1" }}
          required
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Message"
          name="message"
          sx={{ gridColumn: "span 4" }}
          required
          onChange={handleChange}
        />

        <Box
          display="flex"
          justifyContent="start"
          mt="0px"
          sx={{ gridColumn: "span 4" }}
        >
          <Button type="submit" color="secondary" variant="contained">
            ADD 
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </form>
  );
};

export default Addaboutpage;
