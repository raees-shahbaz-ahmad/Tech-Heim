import Cookies from "js-cookie";

export async function addToWishlist(id) {
    try {
        const token = Cookies.get("token");
        const response = await fetch("https://ecomerceapis.runasp.net/api/WishList/AddWishList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json-patch+json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                "productId": id,
                "quantity": 1,
                "couponId": 0
            }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Add to Wishlist Failed", error);
    }
}