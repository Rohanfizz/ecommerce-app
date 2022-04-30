import { atom, selector } from "recoil";
import localforage from "localforage";

const localforageEffect =
    (key) =>
    ({ setSelf, onSet, trigger }) => {
        // If there's a persisted value - set it on load
        const loadPersisted = async () => {
            const savedValue: any = await localforage.getItem(key);

            if (savedValue != null) {
                setSelf(JSON.parse(savedValue));
            }
        };

        // Asynchronously set the persisted data
        if (trigger === "get") {
            loadPersisted();
        }

        // Subscribe to state changes and persist them to localforage
        onSet((newValue, _, isReset) => {
            isReset
                ? localforage.removeItem(key)
                : localforage.setItem(key, JSON.stringify(newValue));
        });
    };

export const userTokenAtom = atom({
    key: "userToken",
    default: null,
    effects: [localforageEffect("userToken")],
});

export const userUUIDAtom = atom({
    key: "userUUID",
    default: null,
});

export const isLoggedInSelector = selector({
    key: "isLoggedInSelector",
    get: ({ get }) => {
        const userToken = get(userTokenAtom);
        return (userToken!=null && userToken != "");
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
