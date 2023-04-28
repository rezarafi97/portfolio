import { useState } from "react";
import EllipsisText from "react-ellipsis-text";

import Grid from "@mui/material/Unstable_Grid2";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

import { Pagination } from "./";
import { projects } from "../../constants/projects";

const ShowProjects = ({ loading }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);

  const fLen = Math.floor(projects.length / 6);

  const pageOneHandler = () => {
    setCount(0);
    setStart(0);
    setEnd(6);
  };

  const pageTwoHandler = () => {
    setCount(1);
    setStart(6);
    setEnd(12);
  };

  const prevPageHandler = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setStart((prevStart) => prevStart - 6);
      setEnd((prevEnd) => prevEnd - 6);
    } else {
      setCount(fLen);
      setStart(fLen * 6);
      setEnd((fLen + 1) * 6);
    }
  };

  const nextPageHandler = () => {
    if (count < fLen) {
      setCount((prevCount) => prevCount + 1);
      setStart((prevStart) => prevStart + 6);
      setEnd((prevEnd) => prevEnd + 6);
    } else {
      setCount(0);
      setStart(0);
      setEnd(6);
    }
  };

  const p = projects.slice(start, end);

  return (
    <>
      {p.map((project, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 1 }}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "steelblue",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  width="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="left"
                    gutterBottom
                    sx={{ direction: "ltr" }}
                  >
                    <EllipsisText text={project.info} length={80} />
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  href={project.link}
                  size="small"
                  color="primary"
                  target="_blank"
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
        </Grid>
      ))}

      <Pagination
        pageOneHandler={pageOneHandler}
        pageTwoHandler={pageTwoHandler}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </>
  );
};

export default ShowProjects;
