import { atom, selector } from "recoil";

// export const localStorageEffect =
//     (key: string) =>
//     ({ setSelf, onSet }: { setSelf: Function; onSet: Function }) => {
//         if (typeof window !== undefined) {
//             const savedValue = localStorage.getItem(key);
//             if (savedValue != null) {
//                 setSelf(JSON.parse(savedValue));
//             }
//         }

//         onSet((newValue: any, _: any, isReset: any) => {
//             if (typeof window !== undefined) {
//                 isReset
//                     ? localStorage.removeItem(key)
//                     : localStorage.setItem(key, JSON.stringify(newValue));
//             }
//         });
//     };
// const getUserTokenFromLocalStorage = () =>
//     typeof window !== undefined ? localStorage.getItem("userToken") : null;

export const userTokenAtom = atom({
    key: "userToken",
    default: null,
    // effects: [localStorageEffect("userToken")],
});

export const isPrivilagedAtom = atom<Boolean>({
    key: "isPrivilagedAtom",
    default: false,
});

export const isLoggedInSelector = selector({
    key: "isLoggedInSelector",
    get: ({ get }) => {
        const userToken = get(userTokenAtom);
        return userToken != null && userToken != "";
    },
});
// export const isPrivilagedAtom = atom({
//     key: "isPrivilagedAtom",
//     default: false,
// });

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
