"use client";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  TextFieldProps,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useRef, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const schema = yup.object().shape({
  Fname: yup.string().required("First Name is required"),
  Lname: yup.string().required("Last Name is required"),
  dob: yup.string(),
  email: yup.string().email().required("Email is required"),
  phone: yup
    .string()
    .min(9, "Must be more than 9 digits")
    .required("Phone number is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipcode: yup.string().required("Zip Code is required"),
  address1: yup.string(),
  address2: yup.string(),
});

export default function Contact({ obj, setObj, setAct, saveDraft }: any) {
  const theme = useTheme();
  const textProps: TextFieldProps = {
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
    if (dob == null) return setDobErr(true);
    contact.gender = gender;
    contact.dob = dob;
    obj.ref = obj.ref ? obj.ref : "REF" + new Date().getTime();
    let conArr = { ...obj, contact };
    setObj(conArr);
    setAct(2);
  };
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState<Dayjs | null>(dayjs());
  const [dobErr, setDobErr] = useState(false);

  useEffect(() => {
    setValue("Fname", obj?.contact?.Fname || "");
    setValue("Lname", obj?.contact?.Lname || "");
    setDob(obj?.contact?.dob || null);
    setValue("dob", obj?.contact?.dob || "");
    setGender(obj?.contact?.gender || "2");
    setValue("email", obj?.contact?.email || "");
    setValue("phone", obj?.contact?.phone || "");
    setValue("address1", obj?.contact?.address1 || "");
    setValue("address2", obj?.contact?.address2 || "");
    setValue("city", obj?.contact?.city || "");
    setValue("state", obj?.contact?.state || "");
    setValue("zipcode", obj?.contact?.zipcode || "");
  }, [obj]);

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  const handleDob = (value: any) => {
    if (value) {
      setDobErr(false);
    }
    setDob(value);
  };

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
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>First Name</label>
            <TextField
              {...register("Fname")}
              {...textProps}
              error={errors?.Fname ? true : false}
              helperText={errors?.Fname ? errors.Fname.message : null}
              placeholder="Please enter your firstname"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>Last Name</label>
            <TextField
              {...register("Lname")}
              {...textProps}
              error={errors?.Lname ? true : false}
              helperText={errors?.Lname ? errors.Lname.message : null}
              placeholder="Please enter your lastname"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>Date of Birth</label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                onChange={(newValue) => {
                  handleDob(newValue);
                }}
                value={dob}
                sx={{ width: "100%" }}
                slotProps={{
                  textField: {
                    helperText: dobErr ? "Date of birth is required" : null,
                    error: dobErr ? true : false,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>Gender</label>
            <Select value={gender} onChange={handleChange} fullWidth={true}>
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Other</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
            <label>Email</label>
            <TextField
              {...register("email")}
              {...textProps}
              error={errors?.email ? true : false}
              helperText={errors?.email ? errors.email.message : null}
              placeholder="Please Enter your email"
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 1 }}>
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
              mt: 3,
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

          <Grid item xs={12} md={4} sx={{ p: 1 }}>
            <label>City</label>
            <TextField
              {...register("city")}
              {...textProps}
              error={errors?.city ? true : false}
              helperText={errors?.city ? errors.city.message : null}
              placeholder="Please enter your city"
            />
          </Grid>

          <Grid item xs={12} md={4} sx={{ p: 1 }}>
            <label>State</label>
            <TextField
              {...register("state")}
              {...textProps}
              error={errors?.state ? true : false}
              helperText={errors?.state ? errors.state.message : null}
              placeholder="Please enter your State"
            />
          </Grid>

          <Grid item xs={12} md={4} sx={{ p: 1 }}>
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
              onClick={() => setAct(0)}
            >
              <ArrowBackIcon /> Go Back
            </Button>
          </Grid>
          <Grid
            item
            md={6}
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
                padding: "5px 30px",
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
