import axios from 'axios';

axios.defaults.baseURL = 'https://raw.githubusercontent.com/sanchezjuanmanuel93/tp1-2018/master/api/';

export default class {
    static getTeams() { return axios.get('/worldcup.teams.json'); }
    static getGroups() { return axios.get('/worldcup.groups.json'); }
    static getRounds() { return axios.get('/worldcup.json'); }
    static createComment(payload) { return axios.post('https://jsonplaceholder.typicode.com/posts', payload); }
}
