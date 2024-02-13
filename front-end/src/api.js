import { objectsData } from "../mock/Objects";

export function fakeFetch() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(objectsData);
        }, 1000)
    })
}
