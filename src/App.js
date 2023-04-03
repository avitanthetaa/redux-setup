import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getChains, getFromTokens } from "./store/getData/actions";

function App() {
  const user = useSelector((state) => state.chain);
  const dispatch = useDispatch();

  const fromTokens = useSelector((state) => state.fromTokens);
  console.log("🚀 ~ App ~ fromTokens:", fromTokens);

  const [istestnet, setIstestnet] = useState(false);

  useEffect(() => {
    dispatch(getChains(istestnet));
    dispatch(getFromTokens(istestnet));
  }, [istestnet]);

  return (
    <div className="App">
      {/* {user?.isLoading ? (
        <p>Loading...</p>
      ) : user?.isSuccess ? (
        user?.data?.map((chain) => <p key={chain.id}>{chain.name}</p>)
      ) : (
        <p>Error: {user?.errorMessage}</p>
      )} */}
    </div>
  );
}

export default App;
