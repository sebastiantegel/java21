import { Link, Outlet } from "react-router-dom";
import "./../styles/Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/about">Om</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <aside> ASIDE </aside>
        <main>
          <Outlet />
        </main>
      </section>
      <footer> FOOTER </footer>
    </div>
  );
};
