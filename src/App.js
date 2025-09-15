import logo from './logo.svg';
import './App.css';
import AppRouter from './component/routes/AppRouter'; 
import { ThemeProvider } from './component/context/ThemeContext';

function App() {
  return (
    
    <div className="App">
      <ThemeProvider>
        <AppRouter/>
      </ThemeProvider>
    </div>

  );
}

export default App;