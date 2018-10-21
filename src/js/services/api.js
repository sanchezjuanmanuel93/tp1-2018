import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1337';

export default class {
    static getTeams() { return axios.get('/worldcup.teams.json'); }
    static getGroups() { return axios.get('/group'); }
    static getGroup(id) { return axios.get(`/group/${id}`); }
    static getRounds() { return axios.get('/match'); }
    static getMatch(id) { return axios.get(`/match/${id}`); }
    static createComment(payload) { return axios.post('https://jsonplaceholder.typicode.com/posts', payload); }
}
