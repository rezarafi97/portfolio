import { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Fab } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

import mainContext from "../context";

const ThemeActionButton = () => {
    const theme = useTheme();
    const { handleThemeChange } = useContext(mainContext);

    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "none",
                    md: "block",
                },
            }}
        >
            <Fab
                aria-label="ThemeChanger"
                variant="extended"
                size="small"
                color="secondary"
                onClick={handleThemeChange}
                sx={{ ml: 2, color: "black" }}
            >
                {theme.palette.mode === "dark" ? (
                    <WbSunnyOutlined />
                ) : (
                    <NightlightOutlined />
                )}
            </Fab>
        </Box>
    );
};

export default ThemeActionButton;
