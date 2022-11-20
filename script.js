import { sidebar as sidebarData, apps } from "./data/index.js";

const navLinksEl = document.querySelector("[data-nav-links]");
const sidebarEl = document.querySelector("[data-sidebar]");
const installedAppsEl = document.querySelector("[data-installed-apps]");
const appsInPlanEl = document.querySelector("[data-apps-in-plan]");
const updateAppEl = document.querySelector("[data-update-app]");
const exitUpdateAppEl = document.querySelector("[data-exit-update-app]");
const cancelUpdateAppEl = document.querySelector("[data-cancel-update-app]");
const toggleModEl = document.querySelector("[data-toggle-mode]")

const sidebar = Array.from(sidebarData);
const installedApps = Array.from(apps.installedApps);
const appsInPlan = Array.from(apps.appsInPlan);

let darkMode = true
checkDarkMode()

function checkDarkMode() {
  document.body.classList.toggle("dark", darkMode)
}

Array.from(navLinksEl.children).forEach((link) => {
  link.addEventListener("click", () => {
    for (let i = 0; i < navLinksEl.children.length; i++) {
      navLinksEl.children[i].classList.remove("active");
    }

    link.classList.add("active");
  });
});

sidebar.forEach((menu) => {
  let menuEl = document.createElement("ul");
  menuEl.classList.add("sidebar__menu");

  menuEl.innerHTML += `<p>${menu.title}</p>`;
  menu.items.forEach((item) => {
    menuEl.innerHTML += `
            <li>
                <div>
                    <i class="${item.icon}"></i>
                    <p>${item.title}</p>
                </div>
                ${
                  item.numOfUpdates != 0
                    ? `<span>${item.numOfUpdates}</span>`
                    : ``
                }
            </li>
        `;
  });

  sidebarEl.appendChild(menuEl);
});

installedApps.forEach((app) => {
  installedAppsEl.innerHTML += `
        <div class="installed-app">
            <div class="installed-app__left-section">
                <img src="assets/apps/${app.img}.png">
                <h3>${app.name}</h3>
            </div>
            <div class="installed-app__middle-section">
                <span class="${app.isUpdated ? "updated" : ""}"></span>
                <p>${app.isUpdated ? "Updated" : "Update Avaliable"}</p>
            </div>
            <div class="installed-app__right-section">
                <button class="${app.isUpdated ? "" : "update"}">
                    ${app.isUpdated ? "Open" : "Update"}
                </button>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    `;
});

appsInPlan.forEach((app) => {
  appsInPlanEl.innerHTML += `
        <div class="app-in-plan">
            <div class="app-in-plan__top-section">
                <img src="assets/apps/${app.img}.png">
                <h3>${app.name}</h3>
            </div>
            <p>${app.description}</p>
            <div class="app-in-plan__bottom-section">
                <button class="${app.isUpdated ? "" : "update"}">
                    ${app.isUpdated ? "Open" : "Update"}
                </button>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    `;
});

Array.from(appsInPlanEl.children).forEach((app) => {
  const button = app.children[app.children.length - 1].children[0];

  button.addEventListener("click", () => {
    if (button.classList.contains("update")) {
      updateAppEl.classList.add("active");
    }
  });
});

Array.from(installedAppsEl.children).forEach((app) => {
  const button = app.children[app.children.length - 1].children[0];

  button.addEventListener("click", () => {
    if (button.classList.contains("update")) {
      updateAppEl.classList.add("active");
    }
  });
});

toggleModEl.addEventListener("click", () => {
  darkMode = !darkMode
  checkDarkMode()
})

function deactivateUpdateApp() {
  updateAppEl.classList.remove("active");
}

exitUpdateAppEl.addEventListener("click", () => deactivateUpdateApp());
cancelUpdateAppEl.addEventListener("click", () => deactivateUpdateApp());
