import { useContext } from "react";
import "../App.css";
import AuthContext from "../context/AuthProvider";

function Home() {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  return <div className="App">Home Page</div>;
}

export default Home;
