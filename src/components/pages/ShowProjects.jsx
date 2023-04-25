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
  Slide,
} from "@mui/material";

import { projects } from "../../constants/projects";

const ShowProjects = ({ loading }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "steelblue",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
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
                    <EllipsisText text={project.info} length={120} />
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
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowProjects;
