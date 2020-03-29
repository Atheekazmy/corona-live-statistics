import React from 'react';
import { AppRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function App() {
  const darkTheme = createMuiTheme({
  
    palette: {
      type: 'dark',
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      }
    }   
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App" >
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
