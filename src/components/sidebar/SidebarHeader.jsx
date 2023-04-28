import { useState } from "react";

import { RandomReveal } from "react-random-reveal";
import { Typography } from "@mui/material";

import ThemeActionButton from "../ThemeActionButton";
import avatar from "../../assets/avatar.jpg";

import { alphabetPersian } from "../../constants/alphabetPersian";
import { CustomAvatar } from "../commons";

import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      <ThemeActionButton />

      <CustomAvatar avatar={avatar} size={125} fallback="RR" />

      <Typography variant="subtitle1" color="black">
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="رضا رفیع زاده"
          onComplete={() => setStart(true)}
        />
      </Typography>

      {start && (
        <Typography variant="caption" color="black">
          <RandomReveal
            isPlaying
            duration={4}
            characterSet={alphabetPersian}
            characters="توسعه دهنده سمت کاربر"
          />
        </Typography>
      )}

      <SocialMediaIcons />
    </>
  );
};

export default SidebarHeader;
