import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profiles">Pet Sitter</Link>{" "}
        <Link to="/add">Add</Link>
      </nav>
    </div>
  );
}