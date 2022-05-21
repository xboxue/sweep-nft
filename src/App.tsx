import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetailsForm from "./components/ProjectDetailsForm/ProjectDetailsForm";
import ProjectImageUploadForm from "./components/ProjectImageUploadForm/ProjectImageUploadForm";
import ProjectSmartContractForm from "./components/ProjectSmartContractForm/ProjectSmartContractForm";
import useAuth from "./hooks/useAuth";
import AppLayout from "./layouts/AppLayout/AppLayout";
import LoginPage from "./pages/LoginPage";
import theme from "./styles/theme";

const App = () => {
  useAuth();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/details" element={<ProjectDetailsForm />} />
              <Route path="/upload" element={<ProjectImageUploadForm />} />
              <Route
                path="/smart-contract"
                element={<ProjectSmartContractForm />}
              />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
