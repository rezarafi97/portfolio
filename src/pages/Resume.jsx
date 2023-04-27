import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";

import { DevExpTimeline, DevEduTimeline } from "../components/pages";
import { CustomDivider } from "../components/commons";

const Resume = ({ helmetTitle }) => {
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
        <CustomDivider
          bColor="info.main"
          cColor="info"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="رزومه من"
        />

        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات"
            />

            <DevExpTimeline loading={loading} />
          </Grid>

          <Grid xs={6}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات"
            />

            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
