import { useState } from "react";
import "./climb.css";

const Climb = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex === activeTab ? null : tabIndex);
  };

  return (
    <section id="climb" className="climb">
      <div className="climb-above">
        <div className="climb-heading">
          <h2 className="climb-heading-01">02</h2>
          <div>
            <h2 className="climb-heading-text">CLIMB</h2>
            <div className="climb-heading-dot"></div>
          </div>
        </div>
        <p className="climb-article">
          Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida
          quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
          tortor nec congue.
        </p>
      </div>
      <div className="climb-tab">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            <p>Mountain 1</p>
          </div>
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            <p>Mountain 2</p>
          </div>
        </div>
        <div
          className={`tab-content mountain-1 ${
            activeTab === 0 ? "active" : ""
          }`}
        >
          <table className="tab-table">
            <tr>
              <th>SCHEDULE</th>
            </tr>
            <tr>
              <td>25 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>18 Dev 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>7 Jan 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </table>
        </div>
        <div
          className={`tab-content mountain-2 ${
            activeTab === 1 ? "active" : ""
          }`}
        >
          <table className="tab-table">
            <tr>
              <th>SCHEDULE</th>
            </tr>
            <tr>
              <td>25 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>28 Nov 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>18 Dev 2016</td>
              <td>Vestibulum viverra</td>
            </tr>
            <tr>
              <td>7 Jan 2017</td>
              <td>Vestibulum viverra</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Climb;
