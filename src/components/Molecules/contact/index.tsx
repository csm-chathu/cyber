"use client";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Text from "../../atomic/textfield";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormControl from "@mui/material/FormControl";

const schema = yup.object().shape({
  Fname: yup.string().required("First Name is required"),
  Lname: yup.string().required("Last Name is required"),
  dob: yup.string(),
  gender: yup.string().required("Gender is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipcode: yup.string().required("Zip Code is required"),
});

export default function Contact({ obj, setObj, setAct }) {
  const theme = useTheme();
  const textProps = {
    id: "outlined-basic",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  let submitHandler = async (contact: any) => {
    let conArr = { ...obj, contact };
    setObj(conArr);
    setAct(2);
    console.log(contact);
  };

  useEffect(() => {
    setValue("Fname", obj?.contact?.Fname || "");
    setValue("Lname", obj?.contact?.Lname || "");
    setValue("dob", obj?.contact?.dob || "");
    setValue("gender", obj?.contact?.gender || "");
    setValue("email", obj?.contact?.email || "");
    setValue("phone", obj?.contact?.phone || "");
    setValue("address1", obj?.contact?.address1 || "");
    setValue("address2", obj?.contact?.address2 || "");
    setValue("city", obj?.contact?.city || "");
    setValue("state", obj?.contact?.state || "");
    setValue("zipcode", obj?.contact?.zipcode || "");
  }, [obj]);
  return (
    <>
      <Typography
        textAlign="left"
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          mb: 3,
        }}
      >
        Personal Information
      </Typography>
      {/* {JSON.stringify(obj)} */}
      <form onSubmit={handleSubmit(submitHandler)} id="hook-form">
        <Grid container direction="row">
          <Grid item xs={6} sx={{ p: 1 }}>
            <label>First Name</label>
            <TextField
              {...register("Fname")}
              {...textProps}
              error={errors?.Fname ? true : false}
              helperText={errors?.Fname ? errors.Fname.message : null}
              placeholder="Please enter your firstname"
            />
          </Grid>
          <Grid item xs={6} sx={{ p: 1 }}>
            <label>Last Name</label>
            <TextField
              {...register("Lname")}
              {...textProps}
              error={errors?.Lname ? true : false}
              helperText={errors?.Lname ? errors.Lname.message : null}
              placeholder="Please enter your lastname"
            />
          </Grid>
          <Grid item xs={6} sx={{ p: 1 }}>
            <label>Date of Birth</label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: "100%" }}
                slotProps={{
                  textField: {
                    helperText: errors?.dob ? errors.dob.message : null,
                    error: errors?.dob ? true : false,
                    ...register("dob"),
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={6} sx={{ p: 1 }}>
            <FormControl
              sx={{ width: "100%" }}
              error={errors?.gender ? true : false}
            >
              <label>Gender</label>
              <Select
                placeholder="Select Gender"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                fullWidth={true}
                {...register("gender")}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              <FormHelperText>
                {errors?.gender ? errors.gender.message : null}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={{ p: 1 }}>
            <label>Email</label>
            <TextField
              {...register("email")}
              {...textProps}
              error={errors?.email ? true : false}
              helperText={errors?.email ? errors.email.message : null}
              placeholder="Please Enter your email"
            />
          </Grid>

          <Grid item xs={6} sx={{ p: 1 }}>
            <label>Phone Number</label>
            <TextField
              {...register("phone")}
              {...textProps}
              error={errors?.phone ? true : false}
              helperText={errors?.phone ? errors.phone.message : null}
              placeholder="(XXX) XXX-XXXX"
            />
          </Grid>

          <Typography
            textAlign="left"
            sx={{
              fontSize: "24px",
              fontWeight: 500,
              mb: 3,
            }}
          >
            Address
          </Typography>
          <Grid item xs={12} sx={{ p: 1 }}>
            <label>Address Line 1</label>
            <TextField
              {...register("address1")}
              {...textProps}
              placeholder="Please enter your Address Line 1"
            />
          </Grid>
          <Grid item xs={12} sx={{ p: 1 }}>
            <label>Address Line 2</label>
            <TextField
              {...register("address2")}
              {...textProps}
              placeholder="Please enter your Address Line 2"
            />
          </Grid>

          <Grid item xs={4} sx={{ p: 1 }}>
            <label>City</label>
            <TextField
              {...register("city")}
              {...textProps}
              error={errors?.city ? true : false}
              helperText={errors?.city ? errors.city.message : null}
              placeholder="Please enter your city"
            />
          </Grid>

          <Grid item xs={4} sx={{ p: 1 }}>
            <label>State</label>
            <TextField
              {...register("state")}
              {...textProps}
              error={errors?.state ? true : false}
              helperText={errors?.state ? errors.state.message : null}
              placeholder="Please enter your State"
            />
          </Grid>

          <Grid item xs={4} sx={{ p: 1 }}>
            <label>Zip Code</label>
            <TextField
              {...register("zipcode")}
              {...textProps}
              error={errors?.zipcode ? true : false}
              helperText={errors?.zipcode ? errors.zipcode.message : null}
              placeholder="Please Enter zip code"
            />
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
            mt: 6,
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
          >
            Save draft
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
