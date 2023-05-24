import "./App.css";

// react-router-dom
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from './pages/help/Faq'
import Form from './pages/help/Form'

// layouts
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="form" element={<Form/>}/>
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;