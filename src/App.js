import './App.css';
import Home from '../src/components/Home/Home.jsx';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  return (
    <div className="App">
      <Home
        data={data}
        isLoading ={isLoading}
      />
    </div>
  );
}

export default App;
