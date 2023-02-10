import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect } from "react";
import { getSliders } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sliders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch();

  useEffect(() => {
    getSliders(dispatch);
  }, [dispatch]);
  const sliders = useSelector((state) => state.sliders.sliders);
  console.log(sliders);

  //Delete product
  // const handleDelete = (id) => {
  //   if (window.confirm("Are your sure you want to delete?")) {
  //     deleteProduct(id, dispatch);
  //   } else {
  //     return;
  //   }
  // };

  const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    {
      field: "title",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => {
        return (
          <>
            <Avatar
              sx={{
                bgcolor: colors.greenAccent[300],
                objectFit: "contain",
                height: 28,
                marginRight: 1,
              }}
              alt={params.row.title}
              src={params.row.image}
              variant="rounded"
            />
            <div title={params.row.title}>{params.row.title}</div>
          </>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      align: "left",
      renderCell: (params) => {
        const buttonSX = {
          padding: "5px",
          bgcolor: colors.redAccent[500],
          "&:hover": {
            bgcolor: colors.redAccent[600],
          },
        };
        return (
          <Box display="flex" gap="10px">
            <Link
              to={`/product/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                sx={{ padding: "5px", bgcolor: colors.primary[500] }}
                variant="contained"
              >
                Edit
              </Button>
            </Link>
            <Button
              sx={buttonSX}
              variant="contained"
              // onClick={() => handleDelete(params.row._id)}
            >
              DELETE
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="SLIDERS" subtitle="Managing the SLIDERS" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={sliders}
          getRowId={(row) => row._id}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Sliders;
