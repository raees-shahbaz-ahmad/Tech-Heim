import Cookies from "js-cookie";

export async function deleteCart(id) {
    try {
        const token = Cookies.get("token");
        const response = await fetch(`https://ecomerceapis.runasp.net/api/Cart/DeleteCartItem/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json-patch+json",
                "Authorization": `Bearer ${token}`,
            }
        });

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to Delete Cart", error);
    }
}