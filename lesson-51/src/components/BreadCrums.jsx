import { Link, useLocation } from "react-router-dom";

function BreadCrums() {
  const location = useLocation();

  let currentLink = []

  const crumbs = location.pathname.split('/')
    .filter((crumb) => crumb != '')
    .map((crumb) => {
        currentLink.push(`/${crumb}`)
        return (
            <div className="crumb" key={crumb}>
                <Link to={currentLink.join('')}>{crumb}</Link>
            </div>
        )
    })


  return <div className="breadcrumbs">{crumbs}</div>;
}

export default BreadCrums;
