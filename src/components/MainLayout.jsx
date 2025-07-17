import { Outlet, useNavigation} from "react-router-dom";
import Loader from "./loader/Loader";
//import photo1 from '../assets/photo1.png';

const MainLayout = () => {
  const navigation = useNavigation();
  //const location = useLocation()
  
  //let bgImage;
 /* 
  if(location.pathname === "/createaccount"){
    bgImage = photo1;
  }

   if (bgImage) {
      document.body.style.background = `url(${bgImage}) `;
    } else {
      document.body.style.background = "";
    }
   */
  return (
   <>
      {navigation.state === "loading" && <Loader />}
      <Outlet />
    </>
  );
};

export default MainLayout;