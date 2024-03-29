import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import MicrowaveIcon from '@mui/icons-material/Microwave';

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CarpenterIcon from '@mui/icons-material/Carpenter';

import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SpaIcon from '@mui/icons-material/Spa';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { AddBoxOutlined, Inventory2Outlined } from "@mui/icons-material";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PlumbingIcon from '@mui/icons-material/Plumbing';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        height: '112vh'
      }}
    >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  URBANSERVICES 
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wuYKiW-nKsq2brVe5IC5hmUJdTeNtANvehhA37w&s`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Admin
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {/* <Item
              title="Products"
              to="/products"
              icon={<Inventory2Outlined />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="Users"
              to="/contacts"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Booking Details"
              to="/booking"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Services
            </Typography>
            <Item
              title="spa"
              to="/spa"
              icon={<SpaIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Mansalon"
              to="/mansalon"
              icon={<ManIcon />}
              selected={selected}
              setSelected={setSelected} 
            />
             <Item
              title="Womansalon"
              to="/womansalon"
              icon={<WomanIcon />}
              selected={selected}
              setSelected={setSelected} 
            />
             <Item
              title="offer Sliders"
              to="/sliders"
              icon={<AddBoxOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="electrician"
              to="/electrician"
              icon={<ElectricalServicesIcon />}
              
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="appliance"
              to="/appliance"
              icon={<MicrowaveIcon />}
              
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="carpenter"
              to="/carpenter"
              icon={<CarpenterIcon />}
              
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="disinfection"
              to="/disinfection"
              icon={<HealthAndSafetyIcon />}
              
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="cleaning Services"
              to="/homecleaning"
              icon={<CleaningServicesIcon />}
              
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Kitchan&Bathroom Cleaning"
              to="/bathroom"
              icon={<KitchenIcon />}
              
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Plumber"
              to="/plumber"
              icon={<PlumbingIcon />}
              
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> 
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
