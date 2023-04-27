import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
        primary: {
            main: "#07009f",
        },
        secondary: {
            main: "#f8ff40",
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
            main: "#07009f",
        },
        secondary: {
            main: "#f8ff40",
        },
    },
    typography: {
        fontFamily: "tanha, vazir, roboto",
    },
});