import { NavLink, Outlet } from "react-router-dom"
function RootLayout() {
  return (
    <>
       <nav>
        <h1>My Articles</h1>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>
       </nav>
       <main>
            <Outlet/>
       </main>
    </>
  )
}

export default RootLayout