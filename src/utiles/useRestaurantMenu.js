import { MENU_API } from "./contants";
import { useEffect ,useState} from "react";

const useRestaurantMenu=(resId)=>{

    const[resInfo,setresInfo] = useState(null);

  //fetch data
  useEffect(()=>{
        fetchMenu();
    },[] );

    const fetchMenu =async ()=>{
          const data =await fetch(MENU_API+resId
              );
          const json = await data.json();
        
          setresInfo(json.data);
    };
    console.log("YYYYYYY", resInfo);

    return resInfo;
}
export default useRestaurantMenu;
