import { useEffect, useRef } from "react";
import Nav from "../../components/nav/nav";
import "./home.css";

const Home = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      headingRef.current.style.bottom = value * 1.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="home-section">
        <img className="cover-image layer-back" src="/src/assets/home.png" />
        <img className="cover-image layer-front" src="/src/assets/layer1.png" />
        <div className="main-titles" ref={headingRef}>
          <h2 className="main-title heading-1">losangeles</h2>
          <h2 className="main-title heading-2">mountains</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
