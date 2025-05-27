import Cookies from "js-cookie";

export async function getUserCart() {
    try {
        const token = Cookies.get("token");
        const response = await fetch("https://ecomerceapis.runasp.net/api/Cart/GetUserCart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json-patch+json",
                "Authorization": `Bearer ${token}`,
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to get Carts", error);
    }
}