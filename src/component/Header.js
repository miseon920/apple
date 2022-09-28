import { Route, Link, NavLink } from "react-router-dom";
import { navlink } from "../data/data";

const Header = () => {
  return (
    <header>
      <div className="lnb">
        <ul className="inner">
          <li>
            <NavLink to="">로그인</NavLink>
          </li>
          <li>
            <NavLink to="">회원가입</NavLink>
          </li>
          <li>
            <NavLink to="">문의하기</NavLink>
          </li>
        </ul>
      </div>
      <div className="inner">
        <h1>
          <Link to="/">
            {/* <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" /> */}
            <svg
              height="45"
              viewBox="0 0 195 45"
              width="195"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="logo-text"
                d="m69.9 32.95h-.1l-5.36-21.51h-6.37l-5.37 21.51h-.1l-4.96-21.51h-6.68l8.4 30.17h6.27l5.56-20.66h.1l5.57 20.66h6.32l8.4-30.17h-6.68zm117.54-21.52v12.1h-12.29v-12.1h-6.27v30.17h6.27v-12.86h12.29v12.86h6.33v-30.17zm-77.92 5.11h9v25.06h6.22v-25.06h9.01v-5.11h-24.23zm-17.3 12.81 3.44-12h.1l3.39 12zm-.05-17.92-9.72 30.17h6.27l2.18-7.59h9.56l2.12 7.59h6.68l-9.66-30.17zm58.13-.36c-7.99 0-12.7 5.16-12.7 13.77v3.39c0 8.71 4.71 13.72 12.65 13.72 7.99 0 11.99-4.86 11.99-10.33v-.56h-6.02c0 3.14-1.52 5.57-5.87 5.57-4.3 0-6.42-2.68-6.42-8.41v-3.39c0-5.67 2.12-8.5 6.42-8.5 4 0 5.87 2.63 5.87 5.62h6.02v-.3c0-5.87-4.5-10.58-11.94-10.58"
              ></path>
              <path
                className="logo-text"
                d="m26.1 10.93c-3.38-.25-6.26 1.89-7.86 1.89-1.63 0-4.13-1.84-6.79-1.79-3.49.05-6.7 2.03-8.5 5.15-3.62 6.29-.92 15.61 2.61 20.72 1.73 2.49 3.79 5.3 6.49 5.2 2.6-.1 3.59-1.68 6.74-1.68s4.03 1.68 6.79 1.63c2.8-.05 4.58-2.55 6.29-5.05 1.98-2.89 2.8-5.7 2.85-5.85-.06-.02-5.46-2.1-5.52-8.32-.05-5.2 4.25-7.7 4.44-7.82-2.44-3.58-6.21-3.98-7.54-4.08"
              ></path>
              <path
                className="logo-text"
                d="m24.02 7.56c1.44-1.74 2.4-4.16 2.14-6.56-2.07.08-4.57 1.38-6.05 3.11-1.33 1.54-2.5 4-2.18 6.36 2.3.18 4.65-1.17 6.09-2.91"
              ></path>

              <path d="m0 0h195v74h-195z" fill="none"></path>
            </svg>
          </Link>
        </h1>
        <nav>
          <ul>
            {navlink.map((nav, idx) => (
              <li key={nav.id}>
                <NavLink to={nav.link}>{nav.menu}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
