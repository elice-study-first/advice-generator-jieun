import './style/tailwind.css';
import AdviceCard from './components/adviceCard';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-[#1F2632] w-full h-screen flex items-center justify-center">
        <AdviceCard />
      </div>
    </QueryClientProvider>
  );
}

export default App;