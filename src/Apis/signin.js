export async function signin(userData) {
    try {
        let response = await fetch("https://ecomerceapis.runasp.net/api/Users/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        return response.json();
    } catch (error) {
        console.error("Signup Error:", error);
    }
}