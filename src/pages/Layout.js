import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/chucknorrisfactgenerator">Chuck Norris Fact Generator</Link>
            </li>
            <li>
              <Link to="/randomdogimage">Random Dog Image Generator</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  };
  
  export default Layout;