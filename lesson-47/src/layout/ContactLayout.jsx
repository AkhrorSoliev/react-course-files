import { NavLink, Outlet } from "react-router-dom";

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil
        modi adipisci maiores sapiente neque a explicabo consequuntur quos. Et
        inventore impedit esse iusto perferendis, neque molestiae provident
        quasi quia dolorum omnis minima, expedita eveniet minus dolores
        asperiores tenetur libero ipsam cum placeat odio error quidem soluta?
        Officiis architecto non iure aspernatur modi, fugiat voluptatem nam quia
        autem ea distinctio voluptas nemo nobis quasi quibusdam odit consequatur
        officia minus explicabo magni. Est, voluptatum reiciendis. Quos,
        voluptatum!
      </p>
      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
