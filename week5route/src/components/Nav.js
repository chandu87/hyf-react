import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
    //   <nav class="navbar navbar-default navbar-fixed-top">
    //     <div class="container">
    //       <Link to="/">
    //         <span class="glyphicon glyphicon-home" aria-hidden="true" /> Home
    //       </Link>
    //       <Link to="/users">All Users </Link>
    //       <Link to="/countdown">Countdown</Link>
    //     </div>
    //   </nav>
      <nav class="navbar navbar-default">
        <div class="container">
    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <Link class="navbar-brand" to="/">HYF</Link>
    </div>

    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><Link to="/">
             <span class="glyphicon glyphicon-home" aria-hidden="true" /> Home <span class="sr-only">(current)</span>
           </Link>
        </li>
        <li>
        <Link to="/users"><span class="glyphicon glyphicon-user" aria-hidden="true" /> All Users </Link>
        </li>
        <li>
        <Link to="/countdown"><span class="glyphicon glyphicon-asterisk" aria-hidden="true" /> Countdown </Link>
        </li>

      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Sign in</a></li>
        <li><a href="#">Log in</a></li>
      </ul>
     </div>{/*<!-- /.navbar-collapse --> */}
  </div>{/*<!-- /.container-fluid -->*/}
</nav>
      
    );
  }
}
export default Nav;
