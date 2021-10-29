import customTheme from './themeConfig'
import { ThemeProvider } from '@material-ui/styles'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        
      </div>
    </ThemeProvider>
  );
}

export default App;
