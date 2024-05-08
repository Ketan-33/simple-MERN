import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import LoginForm from "./components/LoginForm";
import AdminHome from "./pages/AdminHome";
import CreateUserPage from "./pages/CreateUserPage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route
              path="/"
              element={
                <div className="wrapper">
                  <Content />
                  <Sidebar />
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
