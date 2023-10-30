"use client";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Select,
  TextField,
  Typography,
  TextFieldProps,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const textProps: TextFieldProps = {
  id: "outlined-basic",
  variant: "outlined",
  fullWidth: true,
  InputLabelProps: {
    shrink: true,
  },
};

export default function Services({ obj, setObj, setAct }: any) {
  const theme = useTheme();
  const [service, setService] = useState([]);
  const [serviceCategory, setServiceCategory] = useState([]);
  const [serviceError, setServiceError] = useState(false);
  const [defaultService, setDefaultService] = useState([]);

  let sendEmail = async () => {
    const services = await fetch("/api/serice-price", {
      method: "GET",
    }).then((response) => response.json());

    setService(services.option);
    setDefaultService(services.option);
    setServiceCategory(services.category);
  };
  useEffect(() => {
    sendEmail();
  }, []);

  const [serviceSelected, setServiceNameSelected] = useState<string[]>([]);
  const handleChangeMultiple = (event: any) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setServiceNameSelected(value);
  };

  const searchCode = (val: string, cat: boolean = false) => {
    if (val == "") {
      return setService(defaultService);
    }
    filterByValue(defaultService, val, cat);
  };

  function filterByValue(arrayOfObject: any, term: string, cat: boolean) {
    if (!cat) {
      var ans = arrayOfObject.filter(function (v: any, i: number) {
        if (
          v.label.toLowerCase().indexOf(term) >= 0 ||
          v.value["Service Category"].toLowerCase().indexOf(term) >= 0
        ) {
          return true;
        } else false;
      });
      setService(ans);
    } else {
      var ans = arrayOfObject.filter((item: any) => {
        return item.value["Service Category"] == term;
      });
      setService(ans);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let submitHandler = async (service: any) => {
    setServiceError(false);
    if (serviceSelected.length == 0) {
      return setServiceError(true);
    }
    let selected = defaultService.filter(
      (item: any) => item.id == serviceSelected
    );
    if (selected.length > 0) {
      let conArr = { ...obj, service: selected[0] };
      setObj(conArr);
      setAct(3);
    }
  };
  useEffect(() => {
    setServiceNameSelected(obj?.service?.id?.toString() || "");
  }, [defaultService]);
  return (
    <>
      {/* {serviceSelected} */}
      <Typography
        textAlign="left"
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          mb: 3,
        }}
      >
        Select Medical Service
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)} id="hook-form-service">
        <Grid container direction="row">
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>Select Healthcare Category</label>

            <Autocomplete
              disablePortal
              {...register("cat")}
              id="combo-box-demo"
              options={serviceCategory}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select Category" key="id" />
              )}
              onChange={(event, value: any) => searchCode(value?.label, true)}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>Search by Service Description or Code</label>
            <TextField
              {...textProps}
              onChange={(e) => searchCode(e.target.value)}
              placeholder="Description or CPT/HCPCS/DRG Code"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: 1 }}>
            <label>Services</label>
            <FormControl error={serviceError} sx={{ width: "100%" }}>
              <Select
                multiple
                native
                value={serviceSelected}
                onChange={handleChangeMultiple}
                label="Native"
                inputProps={{
                  id: "select-multiple-native",
                }}
              >
                {service.map((item: any, i) => (
                  <option key={i} value={item?.id}>
                    {item.label}
                  </option>
                ))}
              </Select>
              <FormHelperText>
                {serviceError ? "Service type required" : null}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          display="flex"
          gap={1}
          sx={{
            mt: 6,
          }}
        >
          <Grid
            item
            md={6}
            display="flex"
            container
            direction="row"
            alignItems="left"
            justifyContent="left"
            sx={{
              pl: 2,
            }}
          >
            <Button
              variant="text"
              color="success"
              sx={{
                padding: "5px 25px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "8px",
                border: "none",
                backgroundColor: theme.palette.secondary.main,
              }}
              onClick={() => setAct(1)}
            >
              <ArrowBackIcon /> Go Back
            </Button>
          </Grid>
          <Grid
            md={6}
            item
            display="flex"
            container
            direction="row"
            alignItems="right"
            justifyContent="right"
            sx={{
              pr: 2,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{
                padding: "5px 25px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "8px",
              }}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
