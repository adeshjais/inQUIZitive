
import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutUser } from "../../Actions/User";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(window.location.pathname);
  const {isAdmin} = useSelector(state => state.user.user);
  const {user} = useSelector(state => state.user);

  const logoutHandler = () => {
    dispatch(logoutUser());
    console.log(user);
    alert.success("Logged out successfully");
  };

  return (
    <div className="header">
      <div className="header-title">
        <a href="/"><h4 style={{color:"black"}}>inQUIZitive</h4></a>
      </div>
      <Link to="/home" onClick={() => setTab("/home")}>
        {tab === "/home" ? <Home style={{ color: "black" }} /> : <HomeOutlined />}
      </Link>

      {isAdmin &&
        <Link to="/createQuiz" onClick={() => setTab("/createQuiz")}>
          {tab === "/createQuiz" ? (
            <Add style={{ color: "black" }} />
          ) : (
            <AddOutlined />
          )}
        </Link> 
      }

       <Link to="/search" onClick={() => setTab("/search")}>
        {tab === "/search" ? (
          <Search style={{ color: "black" }} />
        ) : (
          <SearchOutlined />
        )}
      </Link>

      <Link to="/account" onClick={() => setTab("/account")}>
        {tab === "/account" ? (
          <AccountCircle style={{ color: "black" }} />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>

      <Link to="/" onClick={logoutHandler}>
        <LogoutIcon />
      </Link>

    </div>
  );
};

export default Header;
