import {atom} from 'recoil'

export const playersAtom = atom({
    key: "playersAtom",
    default: []
})

export const addedPlayersAtom = atom({
    key: "addedPlayersAtom",
    default: false
})

export const finalPlayerAtom = atom({
    key: "finalPlayerAtom",
    default: ""
})