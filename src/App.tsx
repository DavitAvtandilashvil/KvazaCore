import { Views_Component_Loader } from "./Utility/Views_Utility/Views_Component_Loader";
import LogIn from "./components/Login/Login";

function App() {
  return (
    <>
      <Views_Component_Loader number={1} content={<LogIn />} isEnable={true} />
    </>
  );
}

export default App;
