/**
 * Using JS/TS, or any Frontend Framework that you are comfortable with,
 * fetch data from the API and display it in the list of cards.
 */
 const baseUrl = "https://jsonplaceholder.typicode.com";

 const METHODS = {
   getData: "GET",
   post: "POST",
   put: "PUT",
   patch: "PATCH",
   deleteOne: "DELETE"
 };
 
 const [postId, albumId, userId]: number[] = [1, 1, 1];
 
 const ENDPOINTS = {
   posts: "/posts",
   commentsToPost: `/posts/${postId}/comments`,
   albums: "/albums",
   photosForAlbum: `/albums/${albumId}/photos`,
   users: "/users",
   userPosts: `/users/${userId}/posts`,
   userTodos: `/users/${userId}/todos`,
   userAlbums: `/users/${userId}/albums`
 };
 
 interface PostsResponse {
   id: Number;
   title: String;
   body: String;
   userId: Number;
 }
 [];
 
 interface AlbumsResponse {
   id: Number;
   title: String;
   userId: Number;
 }
 [];
 
 interface UsersResponse {
   id: Number;
   name: String;
   username: String;
   email: String;
   address: {
     street: String;
     suite: String;
     city: String;
     zipcode: String;
     geo: {
       lat: String;
       lang: String;
     };
   };
   phone: String;
   website: String;
   company: {
     name: String;
     catchPhrase: String;
     bs: String;
   };
 }
 [];
 