let friends = [];

let friendList = document.getElementById("friend-list");
let addFriendForm = document.getElementById("add-friend-form");

function renderFriends() {
  friendList.innerHTML = "";
  friends.forEach(function (friend) {
    let listItem = document.createElement("li");
    listItem.textContent = `Nombre: ${friend.name}, Edad: ${friend.age}`;
    friendList.appendChild(listItem);
  });
}

function addFriend(event) {
  event.preventDefault();

  let nameInput = document.getElementById("name-input");
  let ageInput = document.getElementById("age-input");

  let name = nameInput.value;
  let age = parseInt(ageInput.value);

  if (name.trim() !== "" && !isNaN(age)) {
    let friend = {
      name: name,
      age: age,
    };

    friends.push(friend);

    renderFriends();

    nameInput.value = "";
    ageInput.value = "";
  }
}

addFriendForm.addEventListener("submit", addFriend);
