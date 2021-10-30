import customTheme from './themeConfig'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const useStyle = makeStyles((theme) => ({
  root : {
    // background: 'url("./assets/images/bkg.png") center/cover no-repeat',
    background: "#242424",
    height: "100vh",
    [theme.breakpoints.down(600)] : {
      height: "100%"
    }
  }
}))


function App() {
  const classes = useStyle()
  
  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.root}>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
