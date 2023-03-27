import Showcase from "./Showcase";
import BaseStats from "./BaseStats";
import "./App.css";

function App() {
  const baseStats = {
    hp: 45,
    attack: 49,
    defense: 65,
    spAttack: 65,
    spDef: 65,
    speed: 45,
  };

  return (
    <div className="main-wrapper background">
      <Showcase />
      <BaseStats stats={baseStats} />
    </div>
  );
}

export default App;
