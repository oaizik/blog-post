import { IRequestOptions } from './interfaces';


export const getAllPosts = async () => {
    try {
		const requestOptions: IRequestOptions = {
			method: 'GET',
			redirect: 'follow'
		};
  
		const response = await fetch("https://jsonplaceholder.typicode.com/posts", requestOptions);
		const result = await response.json();
		return result;
    } catch (error) {
      	console.log('error', error);
    }
};

export const getPostById = async (postId: string) => {
    try {
		const requestOptions: IRequestOptions = {
			method: 'GET',
			redirect: 'follow'
		};
  
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, requestOptions);
		const result = await response.json();
		return result;
    } catch (error) {
      	console.log('error', error);
    }
};

export const getUserById = async (usertId: string) => {
    try {
		const requestOptions: IRequestOptions = {
			method: 'GET',
			redirect: 'follow'
		};
  
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${usertId}`, requestOptions);
		const result = await response.json();
		return result;
    } catch (error) {
      	console.log('error', error);
    }
};

export const getPostComments = async (postId: string) => {
    try {
		const requestOptions: IRequestOptions = {
			method: 'GET',
			redirect: 'follow'
		};
  
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, requestOptions);
		const result = await response.json();
		return result;
    } catch (error) {
      	console.log('error', error);
    }
};