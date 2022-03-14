import './App.css';
import Home from '../src/components/Home/home.jsx';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);
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
