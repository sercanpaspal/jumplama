const keys = {}, mouse = {}

document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);
window.addEventListener("mousedown", (e) => mouse[e.button] = true);
window.addEventListener("mouseup", (e) => mouse[e.button] = false);

export default class Input {
    static GetKeyDown(key){
        return keys.hasOwnProperty(key) ? keys[key] : false;
    }

    static GetMouseButtonDown(key){
        return mouse.hasOwnProperty(key) ? mouse[key] : false;
    }
}