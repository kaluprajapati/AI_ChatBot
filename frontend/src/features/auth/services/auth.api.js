import axios from "axios"


const api = axios.create({
    baseURL: "http://localhost:5173",
     origin: "https://ai-chatbot-bmsy.onrender.com",
    withCredentials: true
})

export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })

        return response.data

    } catch (err) {
        console.log("Register error:", err.response?.data)
        throw err  // ← re-throw so caller knows it failed

    }

}

export async function login({ email, password }) {

    try {

        const response = await api.post("/api/auth/login", {
            email, password
        })

        return response.data

    } catch (err) {
        console.log("Login error:", err.response?.data)  // ← this will show the actual server message
        throw err  // ← re-throw so useAuth.js stops execution
    }

}

export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        return response.data

    } catch (err) {
         console.log("Logout error:", err.response?.data)
        throw err
    }
}

export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        console.log("getMe error:", err.response?.data)
        throw err  // ← stops the 401 loop in useAuth.js
    }

}