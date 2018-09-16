import React from 'react';
import {fetchGithub, fetchGithubUser} from '../api';
import GithubUserList from './GithubUserList';


class GithubSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = { searchKeyword: "jhon", githubUserData: [], githubUserLocations : [] };
        this.search = this.search.bind(this);
      }
    search(){
        fetchGithub(this.state.searchKeyword).then((data)=>{
            this.state.githubUserData = data.items.map((item)=>{
                return item.login;
            });
            let temp = [];
            this.state.githubUserData.forEach((user)=>{
                fetchGithubUser(user).then((data)=>{
                    temp.push(data);
                    this.setState({githubUserLocations : temp});
                    }); 
            });
            console.log(this.state.githubUserLocations);
        });
    }
    render(){
        const {searchKeyword, githubUserLocations} = this.state;
        return (
        <div>
            <input type="text" placeholder="Enter User name" onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}/>
            <button onClick={this.search}>Submit</button>
            <GithubUserList githubData = {githubUserLocations}/>
        </div>
        );
    }
}
export default GithubSearch;