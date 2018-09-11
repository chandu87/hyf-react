import React from 'react';
import {fetchGithub, fetchGithubUser} from '../api';


class GithubSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = { searchKeyword: "", githubUserData: [] };
        this.search = this.search.bind(this);
      }
    search(){
        console.log("serach function invoked");
        // fetchGithub("chandu").then((data)=>{
        //     console.log(data);
        // });
        fetchGithubUser("chandu87").then((data)=>{
            this.setState({githubUserData : data});
            console.log(this.state.githubUserData);
        });
    }
    render(){
        return (
        <div>
            <button onClick={this.search}>Submit</button>
            <p>{this.state.githubUserData.login}</p>
            <p>{this.state.githubUserData.location}</p>

        </div>
        );
    }
}

export default GithubSearch;