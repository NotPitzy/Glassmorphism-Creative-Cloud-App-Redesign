import { App } from "../models/index.js";

const installedApps = [
  new App("adobe-photoshop", "Photoshop", "", true),
  new App("adobe-illustrator", "Illustrator", "", false),
  new App("adobe-after-effects", "Afrer Effects", "", true),
];

const appsInPlan = [
  new App(
    "adobe-premiere-pro",
    "Premiere Pro",
    "Edit, master and create fully proffesional videos",
    false
  ),
  new App(
    "adobe-lightroom",
    "Lightroom",
    "Edit and transform photos and graphics.",
    true
  ),
  new App(
    "adobe-indesign",
    "InDesign",
    "Design and publish great projects & mockups",
    false
  ),
];

export default {
  installedApps,
  appsInPlan,
};
