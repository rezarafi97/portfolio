import { Box, IconButton } from "@mui/material";
import { GitHub, Instagram } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
      <IconButton aria-label="Github">
        <a
          href="https://github.com/rezarafi97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "gray" }} />
        </a>
      </IconButton>

      <IconButton aria-label="Instagram">
        <a
          href="https://www.instagram.com/_rezarafizadeh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram sx={{ color: "gray" }} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;