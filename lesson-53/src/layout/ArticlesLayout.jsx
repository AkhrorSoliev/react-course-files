import { Outlet } from 'react-router-dom'

function ArticlesLayout() {
  return (
    <div>
        <h2>My Articles</h2>
        <hr />
        <Outlet/>
    </div>
  )
}

export default ArticlesLayout