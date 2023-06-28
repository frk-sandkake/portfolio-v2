import React, { useState } from 'react'
import {RepoCard} from "../components/Card"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Item } from '../pages/Home'
import { useParams, Link } from 'react-router-dom'
import { client } from '../api'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Projects = () => {
    const [repos, setRepos] = useState([])

    React.useEffect(() => {
        const fetchRepos = async () => {
            let response = await client.get(`/repos?per_page=6&sort=updated_at`)
           setRepos(response.data)
        }
        fetchRepos()
    }, [])

    const latestUpdates =
        repos.map((repo) => {
            return (
                <Grid item xs={10} md={6} container justifyContent='center' alignItems='stretch'>
                    <Item sx={{ width: '100%' }} container direction='row' alignItems='center'>
                        <Card sx={{ maxWidth: 440, height: '100%' }} key={repo.id} >
                            <CardHeader sx={{ textAlign: 'left'}}
                                avatar={
                                <Avatar aria-label="Github profile image">
                                    <img src={repo.owner.avatar_url}  alt="" height='48px' style={{ objectFit: "cover", marginLeft: '8px'}}/>
                                </Avatar>
                                }
                                title={repo.full_name}
                                subheader={repo.updated_at}
                            />
                            <CardContent>
                            <Typography component='h3' variant="h6" color='primary.main' textAlign='center' pb={1} >
                                    {repo.name}
                            </Typography>
                            <Typography variant="body2" color='text.secondary' textAlign='center' pb={1}>
                                    {repo.description}
                            </Typography>
                            <Button component={Link} to={repo.html_url} >
                                To repo on GitHub
                            </Button>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Item>
                </Grid>

            )
        })

    return (
        <Box>
            <Typography component='h1' variant="h3" color='primary.main'>
                    Project Page
            </Typography>
            <Box p={1} >
                <Typography component='h2' variant="h4" p={1} color='secondary.light'>
                    Latest Updated repos
                </Typography>
                <Grid container justifyContent='center' spacing={1} >
                    {latestUpdates}
                </Grid>
            </Box>
        </Box>
    )
}

export default Projects