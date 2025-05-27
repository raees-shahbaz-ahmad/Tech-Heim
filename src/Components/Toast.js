import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function showToast(text, color) {
    Toastify({
        text: text,
        duration: 2000,
        style: {
            background: "white",
            color: color,
        },
    }).showToast();
}