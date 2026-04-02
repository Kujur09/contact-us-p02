import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-image">
          <img src="/image/apple-logo.png" alt="Apple Logo" />
        </div>
        <div>
          <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
