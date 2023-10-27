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
import { Box, Grid, Typography } from "@mui/material";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#16A34A",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#16A34A",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#22C55E",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "#22C55E",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#DFEAFF",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: "#ffff",
  zIndex: 1,
  color: "#22C55E",
  width: 60,
  cursor: "pointer",
  height: 60,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #22C55E",

  ...(ownerState.active && {
    backgroundColor: theme.palette.success.main,
    color: "#ffff",
    border: "10px solid #22C55E",
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.success.main,
    border: "10px solid #22C55E",
    color: "#ffff",
  }),
}));

const steps = ["Home", "Contact", "Services", "Payment", "Estimation"];

export default function CustomizedSteppers({
  act,
  setAct,
  obj,
  paymentSelect,
}: any) {
  const setStepper = (prop: number) => {
    if (obj.agreed) {
      if (paymentSelect == 1) {
        if (prop > 2 && Object.keys(obj.contact).length == 0) {
          setAct(1);
          document.getElementById("contactValidate")?.click();
        } else if (prop > 2 && act == 1) {
          document.getElementById("contactValidate")?.click();
        } else if (prop > 3 && Object.keys(obj.service).length == 0) {
          document.getElementById("serviceValidate")?.click();
        } else if (prop > 3 && act == 2) {
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
      1: <HomeIcon />,
      2: <PermContactCalendarIcon />,
      3: <VolunteerActivismIcon />,
      4: <AddchartIcon />,
      5: <BarChartIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
        onClick={() => setStepper(props?.icon)}
      >
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
