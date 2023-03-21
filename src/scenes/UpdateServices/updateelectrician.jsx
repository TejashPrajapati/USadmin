import { useTheme } from "@emotion/react";
// import { useGridApiEventHandler } from "@mui/x-data-grid";
import {
  Box,
  Button,
  // FormControl,
  // InputLabel,
  // MenuItem,
  // Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateElectrician } from "../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";

import Header from "../../components/Header";
import { useParams } from "react-router-dom";

const UpdateElectrician = () => {
//   const theme = useTheme();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  // const [rating , setRating] = useState({});
  // const [price , setPrice] = useState();
  // const [discription , setDiscription] = useState();

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

  const id = useParams().id;
  // console.log("params id:",id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateelectrician = {
      ...inputs,
    };
    console.log(updateelectrician);
    updateElectrician(id, updateelectrician, dispatch);
    toast.success("Electrician Update Successfully!");
  };

  return (
    <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
      <Header title={`UPDATE ELECTRICIAN & MASSAGE`} subtitle="Update  Services " />
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      >
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Services Name"
          name="name"
          sx={{ gridColumn: "span 2" }}
          required
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Rating"
          name="rating"
          sx={{ gridColumn: "span 1" }}
          required
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="filled"
          type="number"
          label="Price"
          name="price"
          sx={{ gridColumn: "span 1" }}
          required
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Offer"
          name="offer"
          sx={{ gridColumn: "span 1" }}
          required
          onChange={handleChange}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Description"
          name="discription"
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
            Update Services
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </form>
  );
};

export default UpdateElectrician;
