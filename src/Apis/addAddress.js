import Cookies from "js-cookie";

export async function addAddress(userAddress) {
    try {
        const token = Cookies.get("token");
        const response = await fetch("https://ecomerceapis.runasp.net/api/Address/AddAddress", {
            method: "POST",
            headers: {
                "Content-Type": "application/json-patch+json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(userAddress),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}