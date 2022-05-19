import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetailsForm from "./components/ProjectDetailsForm/ProjectDetailsForm";
import ProjectImageUploadForm from "./components/ProjectImageUploadForm/ProjectImageUploadForm";
import ProjectSmartContractForm from "./components/ProjectSmartContractForm/ProjectSmartContractForm";
import AppLayout from "./layouts/AppLayout/AppLayout";
import theme from "./styles/theme";

const App = () => (
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
