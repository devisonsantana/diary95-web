import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import { Shell, RootLayout } from "./components/layouts/";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Auth />} />

            <Route element={<Shell />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/catalog" element={<h1>Catalog</h1>} />
              <Route path="/charts" element={<h1>Charts</h1>} />

              <Route path="/entry/new" element={<h1>New Entrance</h1>} />
              <Route path="/entry/:entryID" element={<h1>Entry</h1>} />
            </Route>
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
export default App;
