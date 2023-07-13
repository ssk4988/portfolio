import './Header.css';
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

// https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu

function Header() {
  let pages = ['about', 'experience', 'projects', 'skills', 'awards'];
  const navigate = useNavigate();
  let navToPage = (page: string) => {
    if (page == 'home') page = 'about'; // make home the top of page
    const section = document.querySelector('#' + page);
    if(section){
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }
    else{
      // navigate("/" + page);
    }
  };
  return (<AppBar position='sticky'>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            key="home"
            onClick={() => navToPage('home')}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {"<sachin></sivakumar>"}
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => navToPage(page)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {"<" + page + "/>"}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>);
}

export default Header;
