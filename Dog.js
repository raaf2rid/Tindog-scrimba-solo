// Create the Dog class here

import dogs from "./data.js"

class Dog {
  constructor(data){
    Object.assign(this, data)
  }
  renderHtml(){
    const{name,avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
    
    return `

        <img class="profile--picture" src=${avatar} alt="">
            <img class="badge liked" src="images/badge-like.png">
            <img class="badge noped" src="images/badge-nope.png">
            <div class="info" >
            <p class="profile--name">${name}, ${age}</p>
            <p class="profile--status">${bio}</p>
            </div>
    `
  }

}


export default Dog