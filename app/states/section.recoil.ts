import {atom} from "recoil";

export const sectionState = atom({
    key: 'section', default: 0
});

export const sectionInViewState = atom({
    key: 'sectionInView', default: 0
});

export const isAnimatingScrollState = atom({
    key: 'isAnimatingScroll', default: false
});

