import { FaTasks } from "react-icons/fa";
import "bulma/css/bulma.css";
function Header() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <FaTasks />
        <h1 className="title">To Do List</h1>
      </div>
    </section>
  );
}

export default Header;
