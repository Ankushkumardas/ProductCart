import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FilterProvider } from "./FilterContext.tsx";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <FilterProvider>
    <App />
  </FilterProvider>
  
);
