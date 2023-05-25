import { Outlet } from 'react-router-dom'

function ArticlesLayout() {
  return (
    <div>
        <h1>Articles List</h1>
        <hr />
        <Outlet/>
    </div>
  )
}

export default ArticlesLayout