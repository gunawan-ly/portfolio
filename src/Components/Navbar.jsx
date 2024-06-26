import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section>
        <nav
          class="navbar navbar-expand-lg shadow-sm"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div class="container-fluid">
            <Link to={"/portfolio/"} class="navbar-brand">
              Awanophile
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link
                    to={"/portfolio/"}
                    class="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"/portfolio/features"} class="nav-link">
                    Features
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
