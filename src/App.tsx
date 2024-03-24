import { Route, Routes } from "react-router-dom";
import Navigation from "./component/header-navigation/Navigation";
import { Home } from "./pages";
import NotFound from "./pages/pageNotFound/NotFound";
import { Footer } from "./component";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
