import { NavLink, Outlet } from "react-router-dom"
import BreadCrums from "../components/BreadCrums"
function RootLayout() {
  return (
    <>
       <nav>
        <h1>My Articles</h1>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/articles">Articles</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>
       </nav>
        <BreadCrums/>
       <main>
            <Outlet/>
       </main>
    </>
  )
}

export default RootLayout