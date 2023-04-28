import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { Card, CardContent, Typography, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

import { Skills } from "../components/pages";
import avatar from "../assets/avatar02.JPG";
import { CustomAvatar, CustomDivider } from "../components/commons";

const About = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "gray",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text="توسعه دهنده سمت کاربر وب"
            />

            <Slide
              direction="down"
              in={loading}
              style={{
                transitionDelay: loading ? "200ms" : "0ms",
              }}
            >
              <Typography
                variant="body2"
                sx={{ textAlign: "left", mt: 2, ml: 2, color: "primary" }}
              >
                رضا رفیع زاده هستم
                <EmojiPeopleIcon
                  sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                    mr: 1,
                  }}
                ></EmojiPeopleIcon>
              </Typography>
            </Slide>

            <Slide
              direction="down"
              in={loading}
              style={{
                transitionDelay: loading ? "200ms" : "0ms",
              }}
            >
              <Typography
                variant="body2"
                sx={{ textAlign: "left", mt: 2, ml: 2, color: "primary" }}
              >
                متولد 1376 و تو شهر تبریز زندگی می کنم
                <EmojiPeopleIcon
                  sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                    mr: 1,
                  }}
                ></EmojiPeopleIcon>
              </Typography>
            </Slide>

            <Slide
              direction="down"
              in={loading}
              style={{
                transitionDelay: loading ? "200ms" : "0ms",
              }}
            >
              <Typography
                variant="body2"
                sx={{ textAlign: "left", mt: 2, ml: 2, color: "primary" }}
              >
                توسعه دهنده سمت کاربر وب و از مرداد 1401 مشغول کار هستم
                <EmojiPeopleIcon
                  sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                    mr: 1,
                  }}
                ></EmojiPeopleIcon>
              </Typography>
            </Slide>
          </Grid>

          <Grid xs={0} sm={0} md={3} lg={3} xl={3}>
            <CustomAvatar avatar={avatar} size={175} fallback="RR" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="center"
              text="مهارت های من"
            />

            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
