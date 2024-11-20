import { useContext } from "react";
import Calender from "../../components/calender";
import CardContainer from "../../components/CardContainer";
import Carosol from "../../components/Carosol";
import FeatureSection from "../../components/FeatureSection";
import { AuthContext } from "../../provider/AuthProvier/AuthProvider";


const Home = () => {

  const user = useContext(AuthContext);
  console.log(user)
  return (
    <div className="container mx-auto">
      <Carosol></Carosol>
      {/* <h1>Welcome to HOme</h1> */}
      <CardContainer></CardContainer>
      <FeatureSection/>


      
    </div>
  );
};

export default Home;
