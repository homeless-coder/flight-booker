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
import moment from "moment";
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
    height: "56px",
  },
  error: {
    backgroundColor: "red"
  }
}));

const Book = ({
  flightType,
  setFlightType,
  startDate,
  setStartDate,
  returnDate,
  setReturnDate,
}) => {
  const classes = useStyles();

  const renderOptions = () =>
    flightTypes.map((flight) => (
      <option value={flight.value} key={flight.key}>
        {flight.label}
      </option>
    ));

  const validateFlight = () => (flightType == 0 ? true : false);

  const validateBook = () => {
    let startTimestamps = moment(startDate).format("x");
    let returnTimestamps = moment(returnDate).format("x");

    if (flightType == 0) {
      return false;
    } else if (startTimestamps > returnTimestamps) {
      return true;
    } else if (!validateDateFormat(returnDate)) {
      return true;
    } else {
      return false;
    }
  };

  const validateDateFormat = (string) => {
    let regex = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g;
    return regex.test(string);
  };

  const showAlert = () => {
      validateBook()
      if(flightType === 0){
          alert(`You have booked a one-way flight for ${startDate}`)
      } else {
          alert(`You have booked a return flight from ${startDate} to ${returnDate}`)
      }
  }

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
                value={flightType}
                onChange={(e) => setFlightType(e.target.value)}
                inputProps={{
                  name: "flightType",
                  id: "outlined-age-native-simple",
                }}
                className={classes.input}
              >
                {renderOptions()}
              </Select>
              <TextField
                className={[classes.input, !validateDateFormat(startDate) ? classes.error : null]}
                error={!validateDateFormat(startDate)}
                variant="filled"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <TextField
                variant="filled"
                className={[classes.input, !validateDateFormat(returnDate) ? classes.error : null]}
                error={!validateDateFormat(returnDate)}
                value={returnDate}
                disabled={validateFlight()}
                onChange={(e) => setReturnDate(e.target.value)}
              />
              <Button
                variant="contained"
                disabled={validateBook()}
                className={classes.button}
                onClick={() => showAlert()}
              >
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
