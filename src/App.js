import customTheme from './themeConfig'
import { ThemeProvider } from '@material-ui/styles'
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
