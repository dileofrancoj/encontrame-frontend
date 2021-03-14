import React from "react";
import { AuthProvider } from "./contexts/auth";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
  return (
    <AuthProvider>
      <PublicRoutes />
    </AuthProvider>
  );
}

export default App;
