import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import "@fontsource/roboto";
import { Link } from "react-router-dom";
import BrushTwoToneIcon from "@material-ui/icons/BrushTwoTone";
import axios from "axios";
import SearchBar from "./SearchPage";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchInputValue, setSearchInputValue] = React.useState("");
  const [searchReturnValue, setSearchReturnValue] = React.useState({});
  // let state = {
  //   searchInputValue: "",
  //   searchReturnValue: {},
  // };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const searchInputChange = (event) => {
    // /api/search?test=2
    console.log("Hello, I'm from onChange : ", event.target.value);
    setSearchInputValue(event.target.value);
  };

  const filteredSearch = () => {
    console.log(searchInputValue);
    axios.get(`/api/search?query=${searchInputValue}`);
  };
  // .then(setSearchReturnValue(res.data))

  // axios to db where query SELECT all from * WHERE ... = $1
  // })

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            {/* Mail Icon */}
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            {/* Notifications Icon */}
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            {/* Notifications Icon */}
            <BrushTwoToneIcon />
          </Badge>
        </IconButton>
        <p>Jobs</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* Profile Button */}
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      {/* <SearchIcon
        searchInputChange={searchInputChange}
        searchInputValue={state.searchInputValue}
      /> */}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          {/* inkedin REACT ROUTER LINK TO INDEX */}
          <Link to="/" style={{ textDecoration: "none", color: "lavender" }}>
            <Typography className={classes.title} variant="h6" noWrap>
              Inkedin
            </Typography>
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon

              // searchInputValue={state.searchInputValue}
              />
            </div>
            <SearchBar filteredSearch={props.filteredSearch} />
            {/* <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{
                "aria-label": "search",
              }}
              // searchInputChange={searchInputChange}
              // onChange={(event) => {
              //   searchInputChange(event);
              //   filteredSearch();
              // }}
              // onSubmit={((event.target.value) => {
              //   searchReturnValue
              // })}
            /> */}
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* REACT ROUTER LINK TO LOGIN */}
            {props.activeUser === 0 && (
              <Link
                to="/"
                onClick={() => {
                  props.onLogin(1);
                }}
                style={{ textDecoration: "none", color: "lavender" }}
              >
                <IconButton aria-label="show 4 new mails" color="inherit">
                  {/* <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge> */}
                  login
                </IconButton>
              </Link>
            )}

            {props.activeUser !== 0 && (
              <Link
                to="/"
                onClick={() => {
                  props.onLogin(0);
                }}
                style={{ textDecoration: "none", color: "lavender" }}
              >
                <IconButton aria-label="show 4 new mails" color="inherit">
                  {/* <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge> */}
                  logout
                </IconButton>
              </Link>
            )}

            {/* REACT ROUTER LINK TO MESSAGES */}
            <Link
              to="/messages"
              style={{ textDecoration: "none", color: "lavender" }}
            >
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* REACT ROUTER LINK TO SHOWCASE */}
            <Link to="/" style={{ textDecoration: "none", color: "lavender" }}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* REACT ROUTER LINK TO JOBS */}
            <Link
              to="/job_board"
              style={{ textDecoration: "none", color: "lavender" }}
            >
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="secondary">
                  <BrushTwoToneIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* REACT ROUTER LINK TO PORTFOLIO */}
            <Link
              to={`/portfolio/${props.activeUser}`}
              style={{ textDecoration: "none", color: "lavender" }}
            >
              <IconButton
                edge="end"
                aria-label="account of current user"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
