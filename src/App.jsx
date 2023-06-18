import { createRoot } from "react-dom/client";
import Shop from "./Shop";

const App = () => {
  return (
    <div>
      <Shop />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
