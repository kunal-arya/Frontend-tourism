import { useEffect, useRef } from "react";
import "./history.css";

const History = () => {
  const backgroundImageRef = useRef(null);

  function imgHandle(path) {
    console.log("button clicked");
    document.documentElement.style.setProperty(
      "--background-image-path",
      `url(${path})`
    );
  }

  useEffect(() => {
    const backgroundImagePath = getComputedStyle(
      backgroundImageRef.current
    ).getPropertyValue("--background-image-path");
  }, []);

  return (
    <section id="history" ref={backgroundImageRef} className="history">
      <div className="heading">
        <h2 className="heading-01">01</h2>
        <div>
          <h2 className="heading-history">History</h2>
          <div className="heading-dot"></div>
        </div>
      </div>
      <article className="history-article">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
        viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
        Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
        scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
        hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
        congue.
      </article>
      <div className="carousel">
        <img
          onClick={() => imgHandle("/src/assets/background-image-2.jpg")}
          src="src/assets/background-image-2.jpg"
          alt="mountains with clouds"
        />
        <img
          onClick={() => imgHandle("/src/assets/background-image-3.jpg")}
          src="src/assets/background-image-3.jpg"
          alt="mountains"
        />
        <img
          onClick={() => imgHandle("/src/assets/background-img-1.jpg")}
          src="src/assets/background-img-1.jpg"
          alt="mountains in night"
        />

        <img
          onClick={() => imgHandle("/src/assets/background-img-4.png")}
          src="src/assets/background-img-4.png"
          alt="mountains"
        />
      </div>
    </section>
  );
};

export default History;
