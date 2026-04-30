import { starDb } from "./firebase-config.js";

import {
  ref,
  push,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const nebulaMessageRef = ref(starDb, "nebulaMessages");

const starlightInput = document.getElementById("starlightInput");
const sendButton = document.getElementById("sendButton");
const cosmicMessageBoard = document.getElementById("cosmicMessageBoard");

sendButton.addEventListener("click", async () => {
  const messageText = starlightInput.value.trim();

  if (messageText === "") {
    return;
  }

  await push(nebulaMessageRef, {
    text: messageText,
    createdAt: Date.now()
  });

  starlightInput.value = "";
});

onValue(nebulaMessageRef, (snapshot) => {
  cosmicMessageBoard.innerHTML = "";

  snapshot.forEach((childSnapshot) => {
    const cometMessage = childSnapshot.val();

    const messageBubble = document.createElement("p");
    messageBubble.textContent = `🛰️ ${cometMessage.text}`;

    cosmicMessageBoard.appendChild(messageBubble);
  });

  cosmicMessageBoard.scrollTop = cosmicMessageBoard.scrollHeight;
});