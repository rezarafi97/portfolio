import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";
import { Card, CardContent, Typography, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";

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
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} sm={12} md={10} lg={10} xl={10}>
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
              <Typography variant="body2" sx={{ textAlign: "left", mt: 2, ml: 2 }}>
                رضا رفیع زاده هستم
              </Typography>
            </Slide>

            <Slide
              direction="down"
              in={loading}
              style={{
                transitionDelay: loading ? "200ms" : "0ms",
              }}
            >
              <Typography variant="body2" sx={{ textAlign: "left", mt: 2, ml: 2 }}>
                متولد 1376 و تو شهر تبریز زندگی می کنم
              </Typography>
            </Slide>

            <Slide
              direction="down"
              in={loading}
              style={{
                transitionDelay: loading ? "200ms" : "0ms",
              }}
            >
              <Typography variant="body2" sx={{ textAlign: "left", mt: 2, ml: 2 }}>
                حوزه فعالیتم توسعه سمت کاربر وب و با کمتر از یک سال سابقه کار به
                صورت فریلنسر مشغول هستم
              </Typography>
            </Slide>
          </Grid>
          
          <Grid xs={0} sm={0} md={2} lg={2} xl={2}>
            <CustomAvatar avatar={avatar} size={200} fallback="RR" />
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
