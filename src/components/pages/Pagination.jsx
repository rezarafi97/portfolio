import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";

const Pagination = ({
  pageOneHandler,
  pageTwoHandler,
  prevPageHandler,
  nextPageHandler,
}) => {
  return (
    <Grid xs={12} sx={{ textAlign: "center" }}>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={prevPageHandler}
        sx={{ mx: 1 }}
      >
        Prev
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={pageOneHandler}
        sx={{ mx: 1 }}
      >
        1
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={pageTwoHandler}
        sx={{ mx: 1 }}
      >
        2
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={nextPageHandler}
        sx={{ mx: 1 }}
      >
        Next
      </Button>
    </Grid>
  );
};

export default Pagination;
