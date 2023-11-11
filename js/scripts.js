const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");

const contents = ["Shahriyor Baxtiyorov.", "Full-Stack Developer."];
let contentIndex = 0;
let textIndex = 0;
let isDeleting = false;

function type() {
  const currentContent = contents[contentIndex];

  if (textIndex < currentContent.length && !isDeleting) {
    textElement.textContent += currentContent[textIndex];
    textIndex++;
    setTimeout(type, 100);
  } else if (textIndex > 0 && isDeleting) {
    textElement.textContent = currentContent.substring(0, textIndex - 1);
    textIndex--;
    setTimeout(type, 10);
  } else {
    isDeleting = !isDeleting;
    if (isDeleting) {
      cursorElement.className = "blink ";
      setTimeout(type, 1000);
    } else {
      cursorElement.className = "";
      contentIndex = (contentIndex + 1) % contents.length;
      setTimeout(type, 500);
    }
  }
}

type();
