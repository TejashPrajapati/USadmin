import { Avatar, Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../../components/Header";
import { useEffect } from "react";
import { getHomecleaning } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { height } from "@mui/system";

const GetHomecleaning = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 

  const dispatch = useDispatch();

  useEffect(() => {
    getHomecleaning(dispatch);
  }, [dispatch]);
  const gethomecleaning = useSelector((state) => state.homecleaning.homecleaning);
  console.log(gethomecleaning);

  
//   // Delete product
//   const handleDelete = (id) => {
//     if (window.confirm("Are your sure you want to delete?")) {
//       deleteElectrician(id, dispatch);
//     } else {
//       return;
//     }
//   };

  const columns = [
    { field: "_id", headerName: "ID", width: 180 },
    {
      field: "name",
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
              alt={params.row.name}
              src={params.row.image}
              variant="rounded"
            />
            <div title={params.row.name}>{params.row.name}</div>
          </>
        );
      },
    },
    {
      field: "rating",
      headerName: "Retaing",
      flex: 1,
      align: "left",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      align: "left",
    },
   
    {
      field: "discription",
      headerName: "Discription",
      flex: 1,
      align: "left",
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
            //   onClick={() => handleDelete(params.row._id)}
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
      <Header title="WOMANSALON" subtitle="Managing the Womansalon" />
      
      <Box
        m="20px 0 0 0"
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
      <Link to="/add-womansalon" style={{ textDecoration: 'none'}}>
       <Button  color="secondary" variant="contained"
       sx={{ margin: "5px",}}
      
       >
            ADD Service
          </Button>
          </Link>
        <DataGrid
          checkboxSelection
          rows={gethomecleaning}
          getRowId={(row) => row._id}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};


export default GetHomecleaning;
