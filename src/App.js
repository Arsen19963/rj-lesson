import React, {useEffect} from "react";
import Main from "./20.11.21";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Axios from './24.11.21';


export default function App() {
  useEffect(() => {
    Axios.get("https://api.punkapi.com/v2/beers")
    .then(res => console.log(res))
  }, [])
  return <Main />;
}
