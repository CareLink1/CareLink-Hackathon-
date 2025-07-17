import { RouterProvider } from "react-router-dom";
import './App.css';
import router from './Routes';
import UserProvider from "./components/user context/UserProvider";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
