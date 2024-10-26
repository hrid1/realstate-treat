import Calender from "../../components/calender";
import CardContainer from "../../components/CardContainer";
import Carosol from "../../components/Carosol";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Carosol></Carosol>
      {/* <h1>Welcome to HOme</h1> */}
      <CardContainer></CardContainer>
    </div>
  );
};

export default Home;
