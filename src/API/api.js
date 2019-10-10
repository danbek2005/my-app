import axios from 'axios';
import Qs from 'qs';
import $ from 'jquery';
class API{
	constructor(){
		this.baseUrl = "http://localhost:4000";
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
    checkField(data){
        return axios.get(this.baseUrl + "?type=CHECK_FIELD&key=" + data.type + "&value=" + data.value);
       }
    getProfile(id){
        return axios.get(this.baseUrl + "?type=GET_PROFILE&id=" + id);
    }
    getNewFollows(obj){
        return axios.get(this.baseUrl + "?type=GET_NEW_FOLLOWS&name="+obj['name']+"&mail="+obj['mail']);
    }
    getPosts(id){
        return axios.get(this.baseUrl + "?type=GET_POSTS&id=" + id);
    }

    /*-----------------------------
            POST
    -----------------------------*/

	changeFollow(authId, id, text){
        return axios.post(this.baseUrl, Qs.stringify({
           type: 'changeFollow',
           authId: authId,
           id: id,
           follow: text
        }));
    }

    setPost(id, text){
        return axios.post(this.baseUrl, Qs.stringify({
                type: 'setPost',
                id: id,
                text: text
        }));
    }
    updatePost(text, postId){
        return axios.post(this.baseUrl, Qs.stringify({
                type: 'updatePost',
                text: text,
                postId: postId
        }));
    }
    deletePost(postId){
        return axios.post(this.baseUrl, Qs.stringify({
            type: 'deletePost',
            postId: postId
        }));
    }
    updateLikesVal(data){
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