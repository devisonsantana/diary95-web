import { BrowserRouter, Route, Routes } from "react-router";
import { AppProvider } from "./context/AppContext";
import { Shell, RootLayout } from "./components/layouts/";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import NewEntry from "./pages/entry/EntryForm";
import Catalog from "./pages/catalog/Catalog";

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
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/charts" element={<h1>Charts</h1>} />

              <Route path="/entry/new" element={<NewEntry />} />
              <Route path="/entry/:entryID" element={<h1>Entry</h1>} />
            </Route>
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
export default App;
