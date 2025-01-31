import { atom } from "recoil";

export const ratingsAtom = atom({
    key: "ratingsAtom",
    default: "pg"
})

export const modeAtom = atom({
    key: "modeAtom",
    default: ""
})

export const questionAtom = atom({
    key: "questionAtom",
    default: ""
})

export const selectedRatingAtom = atom({
    key: "selectedRatingAtom",
    default: "pg"
})

export const loadingAtom = atom({
    key: "loadingAtom",
    default: false
})

export const spinAndDareAtom = atom({
    key: "spinAndDareAtom",
    default: false
})