import axios from 'axios';
import Qs from 'qs';
import $ from 'jquery';
class API{
	constructor(){
		this.baseUrl = "https://danbek.red/socialNetwork-Server";
	}

    /*-----------------------------
            GET
    -----------------------------*/

    reqUsers(currentPage, pageSize){
        return axios.get(this.baseUrl+"?type=GET_USERS&currentPage="+currentPage+"&pageSize="+pageSize);
    }
    auth(data){
        return axios.get(this.baseUrl + "?type=AUTH&name="+data.name+"&mail="+data.mail+"&password=" + data.password)
    }
    getProfile(id){
        return axios.get(this.baseUrl + "?type=GET_PROFILE&id=" + id);
    }
    getPosts(id){
        return axios.get(this.baseUrl + "?type=GET_POSTS&id=" + id);
    }

    /*-----------------------------
            POST
    -----------------------------*/

	changeFollow(authId, id, text){
        debugger;
        return axios.post(this.baseUrl, Qs.stringify({
           type: 'CHANGE_FOLLOW',
           authId: authId,
           id: id,
           follow: text
        }));
    }

    setPost(id, text){
        debugger;
        return axios.post(this.baseUrl, Qs.stringify({
                type: 'SET_POST',
                id: id,
                text: text
        }));
    }
    updatePost(text, id){
        debugger;
        return axios.post(this.baseUrl, Qs.stringify({
                type: 'UPDATE_POST',
                text: text,
                id: id
        }));
    }
    deletePost(postId){
        debugger;
        return axios.post(this.baseUrl, Qs.stringify({
            type: 'DELETE_POST',
            postId: postId
        }));
    }
    updateLikesVal(data){
        debugger;
        return axios.post(this.baseUrl, Qs.stringify({
                type: data.type, 
                action: data.action.toLowerCase(), 
                id: data.id, 
                likes: data.likes, 
                dislikes: data.dislikes, 
                users: data.users, 
                authId: data.authId
            }));
    }
}

export default API; 