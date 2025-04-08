import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx"
import MainMenu from "./pages/MainMenu.jsx";
import Cronogramas from "./pages/Cronogramas.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Envolvendo com BrowserRouter */}
     
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element ={<Dashboard/>}/>
          <Route path="/menuprincipal" element={<MainMenu/>}/>
          <Route path="/cronogramas" element={<Cronogramas/>}/>

        </Routes>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
