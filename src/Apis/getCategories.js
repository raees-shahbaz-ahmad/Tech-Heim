export async function getAllCategories() {
    try {
        let response = await fetch("https://ecomerceapis.runasp.net/api/Category/GetAllCategories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json-patch+json",
            }
        });

        const result = await response.json();
        const uptResult = result.data.slice(0, 6);
        return uptResult;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}