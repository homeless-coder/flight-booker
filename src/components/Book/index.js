import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  FormControl,
  TextField,
  Select,
  Button,
} from "@material-ui/core";
import { flightTypes } from "../../constants/flights";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "90vh",
  },
  form: {
    backgroundColor: "#232626",
    height: "35vh",
    borderRadius: "15px",
    border: "1px solid #393a3b",
  },
  input: {
    backgroundColor: "#f1f2f2",
    verticalAlign: "center",
    borderRadius: 6,
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  instructions: {
    color: "#e3e6ea",
    fontSize: "2.3em",
  },
  formControl: {
    flex: 1,
    margin: theme.spacing(1),
    minWidth: "80%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  button: {
      height: "56px"
  }
}));

const Book = ({}) => {
  const classes = useStyles();

  const renderOptions = () =>
    flightTypes.map((flight) => (
      <option value={flight.value} key={flight.key}>
        {flight.label}
      </option>
    ));

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classes.form}
          >
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
                value={0}
                onChange={() => {}}
                inputProps={{
                  name: "flightType",
                  id: "outlined-age-native-simple",
                }}
                className={classes.input}
              >
                {renderOptions()}
              </Select>
              <TextField className={classes.input} variant="filled" />
              <TextField variant="filled" className={classes.input} />
              <Button variant="contained" className={classes.button}>
                Book
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Book;
