import React from 'react';

class GithubUserList extends React.Component{
render(){
    const { githubData} = this.props;
    return (
      <div className="gits-list">
          {githubData.map(gits => (
            <div className="git">
            <h4>Name : {gits.login}</h4>
            <p>Link : <a href={gits.html_url}>{gits.html_url}</a></p>
            <p>Location : {gits.location}</p> 
            </div>
          ))}
      </div>
    );
}
};

export default GithubUserList;