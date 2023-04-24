// style
import './Navbar.css'

function Navbar({usersLength}) {
  return (
    <div className='navbar'>
      <div className="navbar-container container">
        <h1 className='navbar-logo'>CUser</h1>
        <h3 className='navbar-counter'>{usersLength > 0 ? `You have: ${usersLength}` : `No user :(`}</h3>
      </div>
    </div>
  )
}

export default Navbar