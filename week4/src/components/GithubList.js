import React from "react";

class GithubList extends React.Component {
  render() {
    const { githubData} = this.props;
    return (
      <div className="gits-list">
          {githubData.map(gits => (
            <div className="git">
            <li>{gits.html_url}</li>
            <img  src={gits.avatar_url}/> 
            </div>
          ))}
      </div>
    );
  }
}

export default GithubList;