let colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "purple",
  "pink",
  "black",
];

document.addEventListener("DOMContentLoaded", function () {
  let buttonList = document.createElement("ul");
  document.body.appendChild(buttonList);
  let div1 = document.createElement("div");
  div1.className = "header-container";
  document.body.appendChild(div1);

  for (let i = 0; i < 6; i++) {
    headerNumber = i + 1;

    let myHeader = document.createElement("h" + headerNumber);
    let myHeaderText = document.createTextNode("This is an h" + headerNumber);

    div1.appendChild(myHeader);
    myHeader.appendChild(myHeaderText);
    myHeader.className = "h" + headerNumber;
    myHeader.className = myHeader.className + " changes-colors";
  }

  let colorChangers = document.querySelectorAll(".changes-colors");
  console.log(colorChangers);

  for (let i = 0; i < colorChangers.length; i++) {
    colorChangers[i].addEventListener("dblclick", headerClicked);
  }

  function headerClicked() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    event.target.style.color = randomColor;
  }
  let buttonClicks = 1;
  let listButton = document.querySelector(".listBtn");
  listButton.addEventListener("click", function () {
    let listItem = document.createElement("li");
    let listText = document.createTextNode("This is item " + buttonClicks);
    ++buttonClicks;
    buttonList.appendChild(listItem);
    listItem.appendChild(listText);
    listItem.addEventListener("click", headerClicked);
    listItem.addEventListener("dblclick", function() {
        event.target.remove();
    } )
  });
});
