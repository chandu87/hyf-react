import React from "react";
import Nav from "../components/Nav";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">

          <div className="row">
          <img src={require('./images/hyf.jpg')} alt="HYF"/>

          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2>About Us : we are hack your future people</h2>
              <p>
                Lerem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>About Us : we are hack your future people</h2>
              <p>
                Lerem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>  
        </div> 
      </div>
    );
  }
}

export default AboutPage;
