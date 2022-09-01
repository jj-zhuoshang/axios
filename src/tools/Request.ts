import axios, { Axios } from "axios";
export class Request{
    axios:Axios; 
    public baseUrl ;
    constructor( ) {
        this.axios = axios; 
        this.baseUrl = "http://localhost:8888/api/"
    }

    async get(url:string){
        return (await axios.get(this.baseUrl + url)).data;
    }
    async post(url:string,data:object){
        return (await axios.post(this.baseUrl + url , data)).data;
    }
}