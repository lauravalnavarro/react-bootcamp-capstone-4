import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Home from '../src/components/Home/home.jsx';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
