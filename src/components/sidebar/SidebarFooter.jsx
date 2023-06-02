import { Box, Typography } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";

const SidebarFooter = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                height: 100,
            }}
        >
            <Typography variant="caption" color="text.primary">
                طراحی شده با{" "}
                <FavoriteRounded
                    sx={{
                        verticalAlign: "middle",
                        color: "tomato",
                        height: 11,
                    }}
                />
            </Typography>

            <Typography variant="caption" color="text.primary" sx={{ mt: 1 }}>
                کپی رایت ۱۴۰۲{" "}
                <CopyrightRounded
                    sx={{ verticalAlign: "middle", height: 11 }}
                />
            </Typography>
        </Box>
    );
};

export default SidebarFooter;
