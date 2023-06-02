import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";

const Pagination = ({
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
        قبلی
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={nextPageHandler}
        sx={{ mx: 1 }}
      >
        بعدی
      </Button>
    </Grid>
  );
};

export default Pagination;
