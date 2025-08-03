// frontend/src/App.jsx
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-background text-text dark:bg-dark-background dark:text-dark-text transition-colors duration-300">
      <AppRouter />
    </div>
  );
}

export default App;
