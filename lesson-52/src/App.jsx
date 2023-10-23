import "./App.css";

// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import Articles from "./pages/articles/Articles";
import ArticleDetail from "./pages/articles/ArticleDetail";
import PageNotFound from "./pages/PageNotFound";

// layouts
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticlesLayout from "./layout/ArticlesLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "form",
              element: <Form />,
            },
          ],
        },
        {
          path: "articles",
          element: <ArticlesLayout />,
          children: [
            {
              index: true,
              element: <Articles />,
            },
            {
              path: ":id",
              element: <ArticleDetail />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
