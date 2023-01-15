import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Layout from "./components/Layout";
import AllTransactions from "./components/Transactions/AllTransactions";
import Tranjactions from "./components/Transactions/Transactions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Balance />
                <Form />
                <Tranjactions />
              </Layout>
            }
          />
          <Route path="/all-transactions" element={<AllTransactions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
