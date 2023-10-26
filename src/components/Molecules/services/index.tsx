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
  const handleChangeMultiple = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setServiceNameSelected(value);
  };

  const searchCode = (val: string) => {
    if (val == "") {
      return setService(defaultService);
    }
    filterByValue(defaultService, val);
  };

  function filterByValue(arrayOfObject: any, term: string) {
    var ans = arrayOfObject.filter(function (v: any, i: number) {
      // console.log(v);
      if (
        v.label.toLowerCase().indexOf(term) >= 0 ||
        v.value["Service Category"].toLowerCase().indexOf(term) >= 0
      ) {
        return true;
      } else false;
    });
    setService(ans);
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
    let selected = defaultService.filter((item) => item.id == serviceSelected);
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
                <TextField {...params} label="label" key="id" />
              )}
              onChange={(event, value) => searchCode(value?.label || "")}
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
                {service.map((item, i) => (
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
          container
          direction="row"
          alignItems="right"
          justifyContent="right"
          gap={1}
          sx={{
            mt: 10,
          }}
        >
          <Button
            variant="outlined"
            color="success"
            sx={{
              padding: "5px 30px",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "8px",
            }}
            onClick={() => setAct(1)}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{
              padding: "5px 30px",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "8px",
            }}
          >
            Continue
          </Button>
        </Grid>
      </form>
    </>
  );
}
