import "./index.css";
import { RoutesProvider } from "./Routes/@router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RoutesProvider />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left"/>
    </QueryClientProvider>
  );
}

export default App;
