import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RootLayout;
