import React from "react";
import GithubList from "./GithubList";
import { fetchGithub } from "../api";

class GithubSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: "", githubData: [] };
    this.search = this.search.bind(this);
  }

  search() {
    console.log("Fetching-----------------");

    fetchGithub(this.state.searchKeyword).then(body => {
       this.setState({ githubData: body.items });
       console.log(this.state.githubData);  
      }
    
    );

  }

  render() {
    const { searchKeyword, githubData} = this.state;
    return (
      <div className="giphy">
        <div className="search">
        <label>Username :</label>
          <input
            placeholder="search for githubData"
            onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}
          />
          <button onClick={this.search}>Search</button>
          <GithubList githubData={githubData} />
        </div>
      </div>
    );
  }
}

export default GithubSearch;