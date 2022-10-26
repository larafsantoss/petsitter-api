import * as React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PetSitters from "./pages/PetSitters/PetSitters";
import Footer from "./components/Footer/Footer"
import SignUp from "./pages/SignUp/SignUp";
import { AddUserForm } from "./components/AddUserForm/AddUserForm";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/profiles" element={<PetSitters />}>
          </Route>
          <Route path="/update" element={<PetSitters />}>
          </Route>
          <Route path="/signup" element={<SignUp />}>
          </Route>
          <Route path="/logout" element={<PetSitters />}>
          </Route>
          <Route path="/add" element={<AddUserForm />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
