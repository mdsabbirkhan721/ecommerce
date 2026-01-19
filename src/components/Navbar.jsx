import { FaShoppingCart, FaUserCircle, FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Collapse } from 'bootstrap';

const base = import.meta.env.BASE_URL;
const Navbar = () => {
  const cart = useSelector((store) => store.cart);
  const wishListItem = useSelector((state) => state.wishlist);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
  };
  const handleNavLinkClick = () => {
    const navCollapse = document.getElementById('navbarSupportedContent');
    if (navCollapse.classList.contains('show')) {
      const bsCollapse = new Collapse(navCollapse, { toggle: true });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="img-fluid rounded"
            src={`${base}images/1765431524778.jpg`}
            alt="Logo"
            width="70"
            height="70"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/home"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/shirt"
                onClick={handleNavLinkClick}
              >
                Shirt
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/tshirt"
                onClick={handleNavLinkClick}
              >
                T-Shirt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/punjabi"
                onClick={handleNavLinkClick}
              >
                Punjabi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/hoodie"
                onClick={handleNavLinkClick}
              >
                Hoodie
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/*  Search Bar */}
          <form
            className="d-flex me-3 mb-2 mb-lg-0"
            role="search"
            onSubmit={handleSearch}
          >
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-success btn-sm"
              type="submit"
              onClick={handleNavLinkClick}
            >
              Search
            </button>
          </form>

          {/* Login / Profile */}
          {isLoggedIn ? (
            <Link
              to="/profile"
              className="text-light me-3 mb-2"
              onClick={handleNavLinkClick}
            >
              <FaUserCircle size={24} />
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline-light  me-2 btn-sm"
              onClick={handleNavLinkClick}
            >
              Login
            </Link>
          )}

          {/* Cart */}
          <Link
            className="text-light text-decoration-none position-relative me-3"
            to="/cart"
            onClick={handleNavLinkClick}
          >
            <FaShoppingCart size={25} />
            <span className="badge bg-danger bag-item-count">
              {cart.length}
            </span>
          </Link>

          {/* Wishlist */}
          <Link
            className="text-light text-decoration-none position-relative"
            to="/wishlist"
            onClick={handleNavLinkClick}
          >
            <FaHeart size={25} />
            <span className="badge bg-danger bag-item-count">
              {wishListItem.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
