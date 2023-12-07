import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddchartIcon from "@mui/icons-material/Addchart";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { Grid } from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 30,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#58D08F",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#58D08F",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: "#ffff",
  zIndex: 1,
  color: "#58D08F",
  width: 53,
  cursor: "pointer",
  height: 53,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  outline: "2px solid #58D08F",

  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    color: "#ffff",
    width: 53,
    height: 53,
    outline: "6px solid #58d08f66",
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main,
    color: "#ffff",
    width: 53,
    height: 53,
    outline: "6px solid #58d08f66",
  }),
}));

// const steps = ["Home", "Contact", "Services", "Payment", "Estimation"];
const steps = ["Home", , "Services", "Estimation"];


export default function CustomizedSteppers({
  act,
  setAct,
  obj,
  paymentSelect,
}: any) {
  const setStepper = (prop: any) => {
    console.log(prop);
    
    if (obj.agreed) {
      if (paymentSelect == 1 ||paymentSelect == 2) {
        if (prop ==3) return
                  // if (prop > 2 && Object.keys(obj.contact).length == 0) {
        //   setAct(1);
        //   document.getElementById("contactValidate")?.click();
        // } else if (prop > 2 && act == 1) {
        //   document.getElementById("contactValidate")?.click();
        // } else 
        if (prop > 2 && Object.keys(obj.service).length == 0) {
          document.getElementById("serviceValidate")?.click();
        } else if (prop > 3 && act == 3) {
          document.getElementById("serviceValidate")?.click();
        } else {
          setAct(prop - 1);
        }
      }
    }
  };
  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
    const icons: { [index: string]: React.ReactElement } = {
      // 1: <HomeIcon />,
      // 2: <PermContactCalendarIcon />,
      // 3: <VolunteerActivismIcon />,
      // 4: <AddchartIcon />,
      // 5: <BarChartIcon />,
      1: <HomeIcon />,
      2: <VolunteerActivismIcon />,
      // 3: <AddchartIcon />,
      3: <BarChartIcon />,
    };

    return (
      /* @ts-ignore */
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
        onClick={() => setStepper(props?.icon)} >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  return (
    <Grid
      display="flex"
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <button
        type="submit"
        form="hook-form"
        id="contactValidate"
        style={{ visibility: "hidden" }}
      ></button>
      <button
        type="submit"
        form="hook-form-service"
        id="serviceValidate"
        style={{ visibility: "hidden" }}
      ></button>
      <Stack sx={{ width: "1100px", mt: 5, mb: 5 }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={act}
          /* @ts-ignore */
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Grid>
  );
}
