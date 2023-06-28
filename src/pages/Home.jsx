import * as React from 'react';
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ImageURL from '../assets/unicorn-me-open-smile-200x200.jpg'
import JavascriptTwoToneIcon from '@mui/icons-material/Javascript';
import CssTwoToneIcon from '@mui/icons-material/CssTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import PoolTwoToneIcon from '@mui/icons-material/PoolTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccessibilityNewTwoToneIcon from '@mui/icons-material/AccessibilityNewTwoTone';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  margin: theme.spacing(0),
  color: theme.palette.text.secondary,
}));


export default function Home() {
  return (
    <Box>
        <Typography component='h1' variant='h2' color='primary'>
                Portfolio 2.0
        </Typography>
      <article class="intro-content" aria-label="Introduction of website" role="article">
        <img src={ImageURL} width="200" height="200" alt="Me dressed up as a unicorn"/>
        <h2 class="subheading">
            Finding my digital voice
        </h2>
        <h3> by Linda Sandaker</h3>
        <p>
            jr. FrontEnd Developer
        </p>
    </article>
    <div class="topics-wrapper" aria-label="Icons of Frontend and Topics" role="none">
        <div class="frontend" aria-label="Dev topics that interest me" role="graphics-object">
          <JavascriptTwoToneIcon aria-label="JavaScript" />
          <CssTwoToneIcon aria-label="CSS3" />
          <GitHubIcon aria-label="GitHub" />
          <AccessibilityNewTwoToneIcon aria-label="Accessibility on the web" />
        </div>
        <div class="topics" aria-label="Topics I'm interested in" role="graphics-object">
          <PublicTwoToneIcon aria-label="Environmental" />
          <ScienceTwoToneIcon aria-label="Science" />
          <AutoStoriesTwoToneIcon aria-label="Stories in all forms" />
          <PoolTwoToneIcon aria-label="all year swimming" />
        </div>
      </div>
      <Button component={Link} to='/projects' color="primary">Check out my latest projects</Button>
    </Box>
  )
}



