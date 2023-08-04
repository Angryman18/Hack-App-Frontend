import Layout from "./Layout/Index";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router";
import ChatRoom from "./views/ChatRoom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/chat' element={<ChatRoom />} />
      </Route>
    </Routes>
  );
}

export default App;
