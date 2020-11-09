import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teform">Te Form Practice</Link>
        </li>
      </ul>
    </nav>
  );
}
