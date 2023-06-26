import React, { useState } from 'react'
import {RepoCard} from "../components/Card"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useParams, Link } from 'react-router-dom'
import { client } from '../api'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Projects = () => {
    const [repos, setRepos] = useState([])
    const [expanded, setExpanded] = React.useState(false);

    React.useEffect(() => {
        const fetchRepos = async () => {
            let response = await client.get(`/repos?per_page=6&sort=updated_at`)
           setRepos(response.data)
        }
        fetchRepos()
    }, [])

      const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const latestUpdates =
        repos.map((repo) => {
            return (
                <div key={repo.id} >
                    <h3>{repo.name}</h3>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    <img src="{repo.owner.avatar_url}" alt="" />
                                </Avatar>
                                }
                                title={repo.full_name}
                                subheader={repo.updated_at}
                            />
                            <CardContent>
                                <Typography variant="body2" color='text.secondary'>
                                    {repo.description}
                            </Typography>
                            <Button component={Link} to={repo.html_url}>
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
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph></Typography>
                                <Typography paragraph>
                                </Typography>
                                </CardContent>
                            </Collapse>
                            </Card>
                </div>
            )
        })

    return (
        <Box>
            <Grid container>
                <h1>Project Page</h1>
                <div>
                    <h2>Latest Updated repos</h2>
                   {latestUpdates}
                </div>

            </Grid>
        </Box>
    )
}

export default Projects