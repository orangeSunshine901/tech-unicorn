import { createRoot } from "react-dom/client";
import Home from "./Home";
import Shop from "./Shop";

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      <Shop />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
