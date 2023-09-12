let textInput = document.querySelector("#message-input");
let sendText = document.querySelector("#send-button");
let chatMsg = document.querySelector("#chat-messages");
let chatMembers = document.querySelector(".chat__members");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let xmarkIcon = document.querySelector("#xmarkIcon");
let menuFlag = false;

let messages = [];

// ____________________________________

// ____________________---___Event Listener

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    sentMsg();
  }
});
sendText.addEventListener("click", sentMsg);

hamburgerMenu.addEventListener("click", (event) => {
  chatMembers.style.display = "flex";
});
xmarkIcon.addEventListener("click", () => {
  chatMembers.style.display = "none";
});

// ___________________---___functions

function sentMsg(e) {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    "  " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();
  let st = ` <div class="sent__message">
              <span class="sent__message-user">Amir Basiri</span>
              <p class="sent__message-msg"> ${textInput.value}</p>
              <span class="sent__message-date">${datetime}</span>
            </div> `;
  if (textInput.value) {
    chatMsg.insertAdjacentHTML("beforeend", st);
  }
  messages.push(st);
  textInput.value = "";
  let messageBody = document.querySelector(".chat__messages-messages");
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}

// console.log(datetime);
