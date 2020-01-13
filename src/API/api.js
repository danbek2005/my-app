import axios from 'axios';

/*import Qs from 'qs';
import $ from 'jquery';*/

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
            POST ($_GET)
    -----------------------------*/


    // The $_POST req work only on localhost:(


	changeFollow(authId, id, text){

        return axios.get(this.baseUrl + "?type=CHANGE_FOLLOW&authId=" + authId + "&id=" + id + "&follow=" + text);

        // return axios.post(this.baseUrl, Qs.stringify({
        //    type: 'CHANGE_FOLLOW',
        //    authId: authId,
        //    id: id,
        //    follow: text
        // }));
    }

    setPost(id, text){

        return axios.get(this.baseUrl + "?type=SET_POST&id=" + id + "&text=" + text);

        // return axios.post(this.baseUrl, Qs.stringify({
        //         type: 'SET_POST',
        //         id: id,
        //         text: text
        // }));
    }
    updatePost(text, id){

        return axios.get(this.baseUrl + "?type=UPDATE_POST&text=" + text + "&id=" + id);

        // return axios.post(this.baseUrl, Qs.stringify({
        //         type: 'UPDATE_POST',
        //         text: text,
        //         id: id
        // }));
    }
    deletePost(postId){

        return axios.get(this.baseUrl + "?type=DELETE_POST&postId=" + postId);

        // return axios.post(this.baseUrl, Qs.stringify({
        //     type: 'DELETE_POST',
        //     postId: postId
        // }));
    }
    updateLikesVal(data){

        return axios.get(this.baseUrl + "?type=" + data.type + 
                                        "&action=" + data.action.toLowerCase() +
                                        "&id=" + data.id + 
                                        "&likes=" + data.likes + 
                                        "&dislikes=" + data.dislikes +
                                        "&users=" + data.users +
                                        "&authId=" + data.authId);

        // return axios.post(this.baseUrl, Qs.stringify({
        //         type: data.type, 
        //         action: data.action.toLowerCase(), 
        //         id: data.id, 
        //         likes: data.likes, 
        //         dislikes: data.dislikes, 
        //         users: data.users, 
        //         authId: data.authId
        //     }));
    }
}

export default API; 