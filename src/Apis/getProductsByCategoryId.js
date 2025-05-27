export async function getProductsByCategoryId(id) {
    try {
        let response = await fetch(`https://ecomerceapis.runasp.net/api/Product/GetProductsByCategory/${id}?childProducts=true`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching categories id:", error);
    }
}