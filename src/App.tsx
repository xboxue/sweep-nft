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
import {
  configureChains,
  createClient,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { alchemyProvider } from "wagmi/providers/alchemy";
import CreateProjectForm from "./components/CreateProjectForm/CreateProjectForm";
import ProjectDetailsForm from "./components/ProjectDetailsForm/ProjectDetailsForm";
import ProjectSmartContractForm from "./components/ProjectSmartContractForm/ProjectSmartContractForm";
import ProjectLayout from "./layouts/ProjectLayout/ProjectLayout";
import LoginPage from "./pages/LoginPage";
import ProjectDeploySmartContractPage from "./pages/ProjectDeploySmartContractPage/ProjectDeploySmartContractPage";
import ProjectMintButtonSettingsPage from "./pages/ProjectMintButtonSettingsPage/ProjectMintButtonSettingsPage";
import ProjectNFTMetadataPage from "./pages/ProjectNFTMetadataPage/ProjectNFTMetadataPage";
import getApolloClient from "./services/apolloClient";
import theme from "./styles/theme";

const { chains, provider } = configureChains(defaultChains, [
  alchemyProvider({ alchemyId: "rBmWMQHNuRP21-OrNfBlyRuMS4kXvKSd" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  provider,
});

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
              <WagmiConfig client={wagmiClient}>
                <ThemeProvider theme={theme}>
                  <SignedIn>
                    <Routes>
                      <Route path="/project/:id" element={<ProjectLayout />}>
                        <Route
                          path="details"
                          element={<ProjectDetailsForm />}
                        />
                        <Route
                          path="upload"
                          element={<ProjectNFTMetadataPage />}
                        />
                        <Route
                          path="smart-contract"
                          element={<ProjectSmartContractForm />}
                        />
                        <Route
                          path="minting-site"
                          element={<ProjectMintButtonSettingsPage />}
                        />
                        <Route
                          path="deploy-test"
                          element={<ProjectDeploySmartContractPage />}
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
              </WagmiConfig>
            </ApolloProvider>
          )}
        </WithClerk>
      </ClerkProvider>
    </>
  );
};

export default App;
