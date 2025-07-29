import { createRoot } from "react-dom/client";
import AppLayout from "./components/AppLayout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<AppLayout />);
