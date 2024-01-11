import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ChuckNorrisFactGenerator from "./pages/ChuckNorrisFactGenerator";
import NoPage from "./pages/NoPage";
import RandomDogImagePage from './pages/RandomDogImagePage';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="chucknorrisfactgenerator" element={<ChuckNorrisFactGenerator />}/>
      <Route path="randomdogimage" element={<RandomDogImagePage />}/>
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}
