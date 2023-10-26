import Container from "../components/atomic/container";
import Home from "../components/Molecules/home/index";
import Contact from "../components/Molecules/contact";
import Services from "../components/Molecules/services";
import Estimation from "../components/Molecules/estimation";
import Insurance from "../components/Molecules/insurance";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Main({ act, setAct, obj, setObj, saveDraft }) {
  const theme = useTheme();
  return (
    <>
      <Container>
        {act == 0 && (
          <Home act={act} setAct={setAct} obj={obj} setObj={setObj} />
        )}
        {act == 1 && (
          <Contact
            act={act}
            setAct={setAct}
            obj={obj}
            setObj={setObj}
            saveDraft={saveDraft}
          />
        )}
        {act == 2 && (
          <Services
            act={act}
            setAct={setAct}
            obj={obj}
            setObj={setObj}
            saveDraft={saveDraft}
          />
        )}
        {act == 3 && (
          <Insurance
            act={act}
            setAct={setAct}
            obj={obj}
            setObj={setObj}
            saveDraft={saveDraft}
          />
        )}
        {act == 4 && (
          <Estimation
            act={act}
            setAct={setAct}
            obj={obj}
            setObj={setObj}
            saveDraft={saveDraft}
          />
        )}
      </Container>
      {act != 0 && (
        <Box
          sx={{
            width: "94%",
            marginLeft: "3%",
            mt: 6,
            mb: 2,
            backgroundColor: "#0F1A2C",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              color: "#ffff",
            }}
          >
            Disclaimer
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: theme.palette.txt.muted,
            }}
          >
            Please read carefully and understand that the estimate provided is
            not a quote or guarantee for the final amount you will owe. It is
            only our best estimate at this time given the information you
            provided, which is subject to change if your medical condition or
            insurance coverage changes. You may want to contact your health
            insurance company to determine your health coverage benefits and to
            get an estimate of what you may owe for your visit.
          </Typography>
        </Box>
      )}
    </>
  );
}
