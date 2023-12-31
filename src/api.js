import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://api.github.com/users/frk-sandkake'
})

export async function getRepos() {
    const response = await fetch('https://api.github.com/users/frk-sandkake')
    const data = await response.json()
    return data
}


/**

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const response = await fetch(url)
    if (!response.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data.vans
}
 */