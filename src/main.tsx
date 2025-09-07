import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { UserProvider } from "./context/user.tsx";
import AuthStateChangeProvider from "./context/auth.tsx";
import { ThemeProvider } from "./layouts/ThemeProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <AuthStateChangeProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthStateChangeProvider>
    </UserProvider>
  </StrictMode>
);
