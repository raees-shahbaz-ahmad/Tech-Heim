import Cookies from "js-cookie";

export async function getUserProfile() {
    try {
        const token = Cookies.get("token");

        let response = await fetch("https://ecomerceapis.runasp.net/api/Users/UserProfile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json-patch+json",
                "Authorization": `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error in getUserProfile:", error);
        return null;
    }
}