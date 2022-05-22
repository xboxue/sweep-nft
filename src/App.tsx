import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProjectDetailsForm from "./components/ProjectDetailsForm/ProjectDetailsForm";
import ProjectImageUploadForm from "./components/ProjectImageUploadForm/ProjectImageUploadForm";
import ProjectSmartContractForm from "./components/ProjectSmartContractForm/ProjectSmartContractForm";
import AppLayout from "./layouts/AppLayout/AppLayout";
import LoginPage from "./pages/LoginPage";
import theme from "./styles/theme";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ClerkProvider
          frontendApi={process.env.REACT_APP_CLERK_API}
          navigate={navigate}
        >
          <SignedIn>
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
          </SignedIn>
          <SignedOut>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </SignedOut>
        </ClerkProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
