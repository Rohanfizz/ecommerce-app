import { atom, selector } from "recoil";

export const userTokenAtom = atom({
    key: "userToken",
    default: null,
});

export const isLoggedInSelector = selector({
    key: "isLoggedInSelector",
    get: ({ get }) => {
        const userToken = get(userTokenAtom);
        return userToken && userToken != "";
    },
});

export const showUserActionDropboxAtom = atom({
    key: "showUserActionDropbox",
    default: false,
});

export const showLoginModalAtom = atom({
    key: "showLoginModalAtom",
    default: false,
});

export const showSignupModalAtom = atom({
    key: "showSignupModalAtom",
    default: false,
});
