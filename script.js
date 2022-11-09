for (let i = 0; i < 81; i++) {
  if (i % 2 === 1) {
    const div = document.createElement("div");
    document.body.append(div);
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
    div.style.background = "red";
  } else {
    const div = document.createElement("div");
    document.body.append(div);
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
    div.style.background = "black";
  }
}
