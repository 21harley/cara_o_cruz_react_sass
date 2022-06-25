import { lazy } from "react";
const Home = lazy(() => import("./pages/home/Home"));
function App() {
  return <Home></Home>;
}

export default App;
