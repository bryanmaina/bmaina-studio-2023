import {atom} from "recoil";

export const menuOpenedState = atom({
    key: 'menuOpened', default: false
});
export const isAnimatingMenuState = atom({
    key: 'isAnimatingMenu', default: false
});

export const desiredMenuItemState = atom({
    key: 'desiredMenuItem', default: 0
});