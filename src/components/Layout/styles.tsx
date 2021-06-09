import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    iconButton: {
      padding: theme.spacing(0.5),
    },
    root: {
      display: "flex",
    },
    appbar: {
      justifyContent: "space-between",
      minWidth: "0px",
    },
    anchorTag: {
      minWidth: "0px",
      "&:hover": {
        background: "rgba(0, 0, 0, 0)",
      },
    },
    btnMiddle: {
      "&:hover": {
        background: "rgba(0, 0, 0, 0)",
      },
    },
    btnPrincipal: {
      "&:hover": {
        background: "rgba(0, 0, 0, 0)",
      },
    },
    activeBtn: {
      background: "rgba(0, 0, 0, 0)",
      borderBottom: "1px solid black",
      borderRadius: 0,
      "&:hover": {
        background: "rgba(0, 0, 0, 0)",
      },
    },
  })
);
