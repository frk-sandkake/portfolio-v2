import React, { useState } from 'react'
import RecipeReviewCard from "../components/Card"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useParams } from 'react-router-dom'

const Projects = () => {
    const params = useParams();
    const [isLoading, setLoading] = useState(false);
    const [repos, setRepo] = useState([])
    React.useEffect(() => {
        const getRepos = async () => {
                setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/frk-sandkake/repos/${params.id}`)
                console.log(response)
                const data = response.json()
                setRepo(data)
                setLoading(false);

            } catch (err) {
                console.log(err)
                setLoading(false);
            }
        }
        getRepos()
    }, [params.id])


    return (
        <Box>
            <Grid container>
                <h1>Project Page</h1>
                {repos?.map((repo) => (
                    <ul>
                        <li key={repo.id} >
                            <h3>{repo.name}</h3>
                            <a href={repo.html_url}>{repo.html_url}</a>
                        </li>
                    </ul>
                ))}
                <RecipeReviewCard />
            </Grid>
        </Box>
    )
}

export default Projects