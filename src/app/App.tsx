import { Outlet } from "react-router-dom";

import { AppRouter } from "@/app/providers/router";
import { Header } from "@/widgets/header";

function App() {
  return (
    <AppRouter>
      <Header />
      <Outlet />
    </AppRouter>
  );
}

export default App;
