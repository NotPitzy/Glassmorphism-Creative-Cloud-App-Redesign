import { SidebarItem, SidebarMenu } from "../models/index.js"

const sidebar = [
    new SidebarMenu("Apps", [
        new SidebarItem("bx bxs-grid", "All Apps"),
        new SidebarItem("fa-solid fa-rotate-right", "Updates", 3)
    ]),
    new SidebarMenu("Categories", [
        new SidebarItem("fa-solid fa-camera", "Photography", 1),
        new SidebarItem("fa-solid fa-shapes", "Design"),
        new SidebarItem("fa-solid fa-film", "Video", 1),
        new SidebarItem("fa-solid fa-paintbrush", "Illustration", 1),
        new SidebarItem("fa-solid fa-computer", "UI/UX"),
        new SidebarItem("fa-solid fa-cubes", "3D/AR"),
    ]),
    new SidebarMenu("Fonts", [
        new SidebarItem("fa-solid fa-italic", "Manage Fonts")
    ]),
    new SidebarMenu("Recource Links", [
        new SidebarItem("fa-solid fa-layer-group", "Stock"),
        new SidebarItem("fa-solid fa-graduation-cap", "Tutorials"),
        new SidebarItem("fa-solid fa-laptop-code", "Portfolio"),
        new SidebarItem("fa-solid fa-comments", "Social Forum"),
    ]),
]

export default sidebar