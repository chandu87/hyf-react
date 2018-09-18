export function fetchGithub(searchKeyword){
    const url = `https://api.github.com/search/users?q=${searchKeyword}`;
    return fetch(url).then(response=>response.json());
};
export function fetchGithubUser(userName){
    const url = `https://api.github.com/users/${userName}`;
    return fetch(url).then(response => response.json());
};
export function fetchHyfRepos(){
    const url = `https://api.github.com/users/HackYourFuture-CPH/repos`;
    return fetch(url).then(response => response.json());
}