import React,{ useState } from "react";
import Main from "./FileSystem/index";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// console.log(this)
export const UsersContext = React.createContext([]);
console.log(UsersContext);

export default function App() {
   const [users, setUsers] = useState(['Karo','Vardan']) 
  return (
    <UsersContext.Provider value={users}>
      <Main />
    </UsersContext.Provider>
  );
}
