import React from 'react';
import {fetchGithub, fetchGithubUser, fetchHyfRepos} from '../api';
import GithubUserList from './GithubUserList';
import HyfRepos from './HyfRepos';


class GithubSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = { searchKeyword: "jhon", githubUserLocations : [] , hyfData : []};
        this.search = this.search.bind(this);
        this.findHyfReposList = this.findHyfReposList.bind(this);
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
    findHyfReposList(){
        fetchHyfRepos().then((data)=>{
            this.setState({hyfData : data});
        });
    }
    render(){
        const {searchKeyword, githubUserLocations, hyfData} = this.state;
        return (
        <div>
            <input type="text" placeholder="Enter User name" onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}/>
            <button onClick={this.search}>Submit</button>
            <GithubUserList githubData = {githubUserLocations}/>
            <button onClick={this.findHyfReposList}>Hyf Repos</button>
            <HyfRepos hyfData = {hyfData}/>

        </div>
        );
    }
}
export default GithubSearch;