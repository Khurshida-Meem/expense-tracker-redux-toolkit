import Balance from "./components/Balance";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Tranjactions from "./components/Transactions/Transactions";

function App() {
  return (
    <Layout>
      
      <Balance />
      <Form />

      <Tranjactions />
    </Layout>
  );
}

export default App;
