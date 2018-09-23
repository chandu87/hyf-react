import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

class HYFUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    console.log("fetching data");
    fetch("https://api.github.com/orgs/hackyourfuture-cph/members")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
      });
    }

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="user-info container">
          <ul>
            {this.state.users.map(user => (
                          <div className="col-md-4">

              <li key={user.id}>
                <Link to={`/${user.login}`}><h4>{user.login}</h4></Link>
                <img src={user.avatar_url}/>
              </li>
              </div>

            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HYFUsers;
