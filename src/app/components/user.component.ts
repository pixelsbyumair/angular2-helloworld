import { Component } from '@angular/core';
import { PostsService } from '../services/posts.services';

@Component({
	'selector': 'user',
	'templateUrl': "../app.component.html",
	'styleUrls': ['../app.component.css'],
	providers: [PostsService]
})

export class UserComponent {
  title: string;
  name: string;
  email: string;
  address = {
  	street: '12 Main st',
  	city: 'Los Angeles',
  	state: 'CA'
  };
  hobbies: string[];
  showHobbies: boolean;

    constructor(private postsService: PostsService) {
  	  this.title = 'MY FIRST ANGULAR APP';
	  this.name = 'John Doe';
	  this.email = 'abc@example.com';
	  this.address = {
	  	street: '12 Main st',
	  	city: 'Los Angeles',
	  	state: 'CA'
	  };

	  this.hobbies = ['Movies', 'Football', 'Programming'];
  	  this.showHobbies = false;

  	  this.postsService.getPosts().subscribe(posts => {
  	  	console.log(posts);
  	  });
  	}


  	toggleHobbies(){
  		this.showHobbies = !this.showHobbies;
  	}

  	removeHobby(index){
  		this.hobbies.splice(index, 1);
  	}

  	addHobby(hobby) {
  		this.hobbies.push(hobby);
  		//document.getElementById('hobby').value = '';
  	}

}

interface address {
	street: string;
	city: string;
	state: string;
}