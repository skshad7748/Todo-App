import styles from "./WelcomeMessage.module.css";
import { BsFillCupHotFill } from "react-icons/bs";

const WelcomeMessage = () => {
  return(
    <>
    <BsFillCupHotFill size={70}/>
    <p className={styles.welcome}>Enjoy Your Day</p>;
    </>
  ) 
};

export default WelcomeMessage;