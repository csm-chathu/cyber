import Container from "../components/atomic/container";
import Home from "../components/Molecules/home/index";
import Contact from "../components/Molecules/contact";
import Services from "../components/Molecules/services";
import Estimation from "../components/Molecules/estimation";

export default function Main({ act, setAct, obj, setObj }) {
  return (
    <Container>
      {act == 0 && <Home act={act} setAct={setAct} />}
      {act == 1 && (
        <Contact act={act} setAct={setAct} obj={obj} setObj={setObj} />
      )}
      {act == 2 && (
        <Services act={act} setAct={setAct} obj={obj} setObj={setObj} />
      )}
      {act == 4 && (
        <Estimation act={act} setAct={setAct} obj={obj} setObj={setObj} />
      )}
    </Container>
  );
}
