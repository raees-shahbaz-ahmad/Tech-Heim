export async function getAllBanners() {
    try {
        let response = await fetch("https://ecomerceapis.runasp.net/api/Banner/GetAllBanners", {
            method: "GET",
            headers: {
                "Content-Type": "application/json-patch+json",
            }
        });

        const result = await response.json();
        return result.data[0];
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}