import { ApolloProvider } from "@apollo/client";
import {
  AuthenticateWithRedirectCallback,
  ClerkProvider,
  SignedIn,
  SignedOut,
  WithClerk,
} from "@clerk/clerk-react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ProjectDetailsForm from "./components/ProjectDetailsForm/ProjectDetailsForm";
import ProjectImageUploadForm from "./components/ProjectImageUploadForm/ProjectImageUploadForm";
import ProjectSmartContractForm from "./components/ProjectSmartContractForm/ProjectSmartContractForm";
import AppLayout from "./layouts/AppLayout/AppLayout";
import LoginPage from "./pages/LoginPage";
import getApolloClient from "./services/apolloClient";
import theme from "./styles/theme";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <ClerkProvider
        frontendApi={process.env.REACT_APP_CLERK_API}
        navigate={navigate}
      >
        <WithClerk>
          {clerk => (
            <ApolloProvider
              client={getApolloClient({
                getToken: () => clerk.session.getToken({ template: "hasura" }),
              })}
            >
              <ThemeProvider theme={theme}>
                <SignedIn>
                  <Routes>
                    <Route path="/" element={<AppLayout />}>
                      <Route
                        path="/:id/details"
                        element={<ProjectDetailsForm />}
                      />
                      <Route
                        path="/:id/upload"
                        element={<ProjectImageUploadForm />}
                      />
                      <Route
                        path="/:id/smart-contract"
                        element={<ProjectSmartContractForm />}
                      />
                    </Route>
                  </Routes>
                </SignedIn>
                <SignedOut>
                  <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                    <Route
                      path="/oauth-callback"
                      element={<AuthenticateWithRedirectCallback />}
                    />
                  </Routes>
                </SignedOut>
              </ThemeProvider>
            </ApolloProvider>
          )}
        </WithClerk>
      </ClerkProvider>
    </>
  );
};

export default App;
