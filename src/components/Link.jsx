import { Button } from '@mui/material'
import { Link } from "react-router-dom"

export function Link({ children, ...rest }) {
  return (
    <Button component={Link} to={path}
      {...rest}
    >
      {children}
    </Button>
  )
}
