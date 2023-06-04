import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='pageNotFound-container'>
        <h1>👇PageNotFound👇</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem corporis veritatis sint, velit at nobis eum consectetur, autem odio numquam tempora vel sunt, possimus atque non amet libero! Doloribus voluptates porro unde non soluta. Quibusdam voluptas laborum optio ducimus, a minus debitis amet sit accusamus, ad reiciendis, quos quis.</p>
        <NavLink to="/">
            Home Page
        </NavLink>
    </div>
  )
}

export default PageNotFound