function generateFriend(event){
  event.preventDefault();

  new Typewriter("#friendDisplay", {
    strings: ["Alphi" , "Melk"] ,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

let FriendFormElement = document.querySelector("#friendForm");
FriendFormElement.addEventListener('submit',generateFriend)