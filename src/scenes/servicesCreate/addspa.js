import { useTheme } from "@emotion/react";
import { useGridApiEventHandler } from "@mui/x-data-grid";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSpa } from "../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";

import Header from "../../components/Header";

const Addspa = () => {
  const theme = useTheme();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const addspa = {
      ...inputs,
    };
    console.log(addspa);
    addSpa(addspa, dispatch);
    toast.success("Spa Added Successfully!");
  };

  return (
    <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
      <Header title={`ADD PRODUCT`} subtitle="Create New Product" />
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
            ADD Services
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </form>
  );
};

export default Addspa;
