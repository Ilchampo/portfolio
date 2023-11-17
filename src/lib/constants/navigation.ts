import type { ISidenavItem } from "$lib/interfaces/ISidenav";

export const navigationItems: ISidenavItem[] = [
    {
        icon: "user",
        name: "About Me",
        path: "#about-me",
    },
    {
        icon: "suitcase",
        name: "Experience",
        path: "#experience",
    },
    {
        icon: "graduation-cap",
        name: "Education",
        path: "#education",
    },
    {
        icon: "hammer",
        name: "Skills",
        path: "#skills",
    },
    {
        icon: "comment",
        name: "Contact Me",
        path: "#contact-me",
    }
];