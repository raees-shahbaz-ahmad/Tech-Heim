export async function getProductsSale() {
    try {
        let response = await fetch("https://ecomerceapis.runasp.net/api/Product/GetProductsWithPaging?pageNumber=1&pageSize=10", {
            method: "GET",
            headers: {
                "Content-Type": "application/json-patch+json",
            }
        });

        const result = await response.json();
        const uptResult = result.data.slice(1, 5);
        return uptResult;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}