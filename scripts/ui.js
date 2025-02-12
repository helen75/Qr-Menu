import { buttonData } from "./constants.js";

const buttonsArea = document.getElementById("buttons");

const menuList = document.getElementById("menu-list");

export const renderMenuItems = (data) => {
  menuList.innerHTML = data
    .map(
      (item) => `
  <a
      id="card"
      href="./detail.html?id=${item.id}"
      class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
    >
      <img class="rounded shadow img-fluid" src="${item.img}" />

      <div>
        <div class="d-flex justify-content-between">
          <h5>${item.title}</h5>
          <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}</p>
        </div>
        <p class="lead">
        ${item.desc}
        </p>
      </div>
    </a>`
    )
    .join("");
};

export const renderButtons = (activeText) => {
  buttonsArea.innerHTML = "";
  buttonData.forEach((btn) => {
    const buttonEle = document.createElement("button");

    buttonEle.className = "btn btn-outline-dark";

    buttonEle.setAttribute("data-id", btn.value);

    buttonEle.innerText = btn.text;

    if (btn.text === activeText) {
      buttonEle.classList.add("btn-dark", "text-white");
    }

    buttonsArea.appendChild(buttonEle);
  });
};
