import React from "react";

class GithubList extends React.Component {
  render() {
    const { githubData} = this.props;
    return (
      <div className="gits-list">
          {githubData.map(gits => (
            <div className="git">
            <h4>{gits.login}</h4>
            <p>Link : <a href={gits.html_url}>{gits.html_url}</a></p>
            <img  src={gits.avatar_url}/> 
            </div>
          ))}
      </div>
    );
  }
}

export default GithubList;