import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Job from "./pages/job/Job";
import Footer from "./components/footer/Footer";

import { ThemeContext } from "./context/themeContext";
import { useContext, useState } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { jobs } from "./data/jobs";

function App() {
  const [resultsCount, setResultsCount] = useState(6);
  const [searchResults, setSearchResults] = useState(jobs);

  const { theme } = useContext(ThemeContext);

  const Root = () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home resultsCount={resultsCount} onResultsCount={setResultsCount} searchResults={searchResults} onSearchResults={setSearchResults} />} />
        <Route path="/job/:id" element={<Job />} />
      </Route>
    )
  );

  return (
    <div className={`App theme-${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
