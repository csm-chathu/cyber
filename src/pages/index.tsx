import Container from "../components/atomic/container";
import Home from "../components/Molecules/home/index";
import Contact from "../components/Molecules/contact";
import Services from "../components/Molecules/services";
import Estimation from "../components/Molecules/estimation";
import Insurance from "../components/Molecules/insurance";

export default function Main({ act, setAct, obj, setObj, saveDraft }) {
  return (
    <Container>
      {act == 0 && <Home act={act} setAct={setAct} />}
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
  );
}
