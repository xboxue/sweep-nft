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
import CreateProjectForm from "./components/CreateProjectForm/CreateProjectForm";
import ProjectDetailsForm from "./components/ProjectDetailsForm/ProjectDetailsForm";
import ProjectSmartContractForm from "./components/ProjectSmartContractForm/ProjectSmartContractForm";
import ProjectLayout from "./layouts/ProjectLayout/ProjectLayout";
import LoginPage from "./pages/LoginPage";
import ProjectNFTMetadataPage from "./pages/ProjectNFTMetadataPage/ProjectNFTMetadataPage";
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
                    <Route path="/project/:id" element={<ProjectLayout />}>
                      <Route path="details" element={<ProjectDetailsForm />} />
                      <Route
                        path="upload"
                        element={<ProjectNFTMetadataPage />}
                      />
                      <Route
                        path="smart-contract"
                        element={<ProjectSmartContractForm />}
                      />
                    </Route>
                    <Route
                      path="/project/new"
                      element={<CreateProjectForm />}
                    />
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
