import {yourName} from './lib';

let test = () => console.log('hello all')

test();

yourName('Parvathy');

async function getPosts() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts));