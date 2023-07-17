import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { UserProvider } from '../contexts/UserContext';  // Import the context

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default App;
