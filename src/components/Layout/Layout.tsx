import { Box, Button, Tooltip } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { useStyles } from "./styles";
import { ReactNode } from "react";

type Props = { children: ReactNode };

type menuItems = {
  id: number;
  text: string;
  path: string;
};

type menuIcons = {
  id: number;
  title: string;
  icon: any;
  path: string;
};

const Layout = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems: menuItems[] = [
    {
      id: 1,
      text: "Episodios",
      path: "/episodes",
    },
    {
      id: 2,
      text: "Conocenos",
      path: "/aboutus",
    },
    {
      id: 3,
      text: "FAQ",
      path: "/faq",
    },
  ];

  const menuIcons: menuIcons[] = [
    {
      id: 1,
      title: "Insta",
      icon: <i className="fab fa-instagram"></i>,
      path: "https://www.instagram.com/podcast.malirsal/",
    },
    {
      id: 2,
      title: "Spotify",
      icon: <i className="fab fa-spotify"></i>,
      path:
        "https://open.spotify.com/show/3tQ0GNKkXkob2YyXfXNBr2?si=WR8PtkVlTWKnKJhH3Nh1Ng",
    },
    {
      id: 3,
      title: "Soundcloud",
      icon: <i className="fab fa-soundcloud"></i>,
      path: "https://soundcloud.com/user-218767519",
    },
    {
      id: 4,
      title: "Apple Podcast",
      icon: <i className="fab fa-apple"></i>,
      path:
        "https://podcasts.apple.com/co/podcast/malirsal-podcast/id1529371132",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar elevation={0}>
        <Toolbar className={classes.appbar}>
          <Button
            startIcon={<MicNoneIcon />}
            onClick={() => history.push("")}
            className={classes.btnPrincipal}
          >
            Podcast Malir Sal
          </Button>
          <Box>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path
                    ? classes.activeBtn
                    : classes.btnMiddle
                }
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Box>
            {menuIcons.map((item) => (
              <Tooltip title={item.title}>
                <Button
                  key={item.id}
                  href={item.path}
                  startIcon={item.icon}
                  className={classes.anchorTag}
                ></Button>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
