import Cookies from "js-cookie";

export async function addToCart(id) {
    try {
        const token = Cookies.get("token");
        const response = await fetch("https://ecomerceapis.runasp.net/api/Cart/AddToCart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json-patch+json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                "productId": Number(id),
                "quantity": 1,
                "couponId": 0
            }),
        });

        const data = await response.json();
        return { status: response.status, data };

    } catch (error) {
        console.log("Add to Cart Failed", error);
        return { status: 500, data: null };
    }
}