import { useLocation } from "react-router-dom";
import "./footer.scss";
import JobFooter from "../jobFooter/JobFooter";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      {location.pathname.startsWith("/job") ? (
        <JobFooter />
      ) : (
        <>
          <p className="credits">Inspired by challenges from frontendmentor.io</p>
          <div className="links">
            <a href="https://github.com/Rasgrin" target="_blank">
              Github
            </a>
            <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
              LinkedIn
            </a>
            <a href="https://stefan-rogic.netlify.app">Portfolio</a>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
