import { Outlet } from "react-router-dom";

import { AppRouter } from "@/app/providers/router";

function App() {
  return (
    <AppRouter>
      <Outlet />
    </AppRouter>
  );
}

export default App;
