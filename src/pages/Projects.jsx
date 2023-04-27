import { useState, useEffect } from "react";

import { Helmet } from "react-helmet-async";

import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SchoolRounded } from "@mui/icons-material";

import { ShowProjects } from "../components/pages";

import { CustomDivider } from "../components/commons";

const Projects = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
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
            bColor="secondary.main"
            cColor="secondary"
            icon={<SchoolRounded />}
            align="center"
            text="نمونه کار های من"
          />

          <Grid container sx={{ mx: 3, mt: 2 }}>
            <ShowProjects loading={loading} />
          </Grid>
        </CardContent>
      </Card>

      
    </>
  );
};

export default Projects;
