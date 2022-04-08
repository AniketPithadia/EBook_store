import React from "react";
import AppRoutes from "./App.routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<></>}>
        <BrowserRouter>
          <div className="wrapper">
            <Header />
            <main>
              <AppRoutes></AppRoutes>
            </main>
            <Footer />
          </div>
          <ToastContainer />
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
