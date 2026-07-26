import { useEffect } from "react";
import "./App.css";
import birdie from "./birdie.JPG";

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.frnkastro.party";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <img src={birdie} alt="Birdie Parties" className="birdie-pic" />
    </main>
  );
};

export default App;
