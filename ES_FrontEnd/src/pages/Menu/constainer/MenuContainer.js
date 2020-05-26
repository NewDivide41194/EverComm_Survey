import React,{useEffect} from 'react';
import MainMenu from '../component/MainMenu';

const MenuContainer=(props)=>{
  useEffect(() => {
    localStorage.removeItem("SurveyHeaderId")
  }, [])
  return(
    <MainMenu/>
  )
  
}
export default MenuContainer;