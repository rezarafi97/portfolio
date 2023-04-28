import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
        primary: {
            main: "#274472",
        },
        secondary: {
            main: "#41729f",
        },
        warning: {
            main: "#5885af",
        },
        info: {
            main: "#c3e0e5",
        },
    },
    typography: {
        fontFamily: "tanha, vazir, roboto",
    },
});

export const darkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
        primary: {
            main: "#274472",
        },
        secondary: {
            main: "#41729f",
        },
        warning: {
            main: "#5885af",
        },
        info: {
            main: "#c3e0e5",
        },
    },
    typography: {
        fontFamily: "tanha, vazir, roboto",
    },
});