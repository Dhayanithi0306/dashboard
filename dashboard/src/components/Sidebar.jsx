import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`d-flex flex-column bg-dark text-white vh-100 p-3`}
      style={{
        width: collapsed ? "70px" : "240px",
        transition: "width 0.3s ease",
      }}
    >
      {/* Toggle Button */}
      <button
        className="btn btn-outline-light mb-3"
        onClick={() => setCollapsed(!collapsed)}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Navigation Menu */}
      <Nav className="flex-column">
        <NavItem to="/" icon="bi-house" label="Dashboard" collapsed={collapsed} />
        <NavItem to="/students" icon="bi-person" label="Students" collapsed={collapsed} />
        <NavItem to="/subjects" icon="bi-book" label="Subjects" collapsed={collapsed} />
        <NavItem to="/settings" icon="bi-gear" label="Settings" collapsed={collapsed} />
      </Nav>
    </div>
  );
};

const NavItem = ({ to, icon, label, collapsed }) => (
  <Nav.Item className="d-flex align-items-center p-2 sidebar-item">
    <Link to={to} className="text-light text-decoration-none d-flex align-items-center">
      <i className={`bi ${icon} fs-5`}></i>
      {!collapsed && <span className="ms-3">{label}</span>}
    </Link>
  </Nav.Item>
);

export default Sidebar;
