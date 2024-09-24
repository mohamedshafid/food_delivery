import React from 'react';
import "./Menu.css";
import { menu_list } from "../../assets/assets";

const Menu = ({ category, setCategory }) => {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit modi voluptatum enim omnis ex architecto, aspernatur tempore aliquam, libero vitae saepe impedit distinctio a corrupti hic laboriosam asperiores assumenda.</p>
      <div className="menu-items-list">
      {
        menu_list.map((item, index) => {
          return (
            <div key={index} className="menu-items" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                 <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
            </div>
          )
        
        })
      }
      {
        menu_list.map((item, index) => {
          return (
            <div key={index} className="menu-items" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                 <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
            </div>
          )
        
        })
      }
      </div>
    <hr />
    </div>
  )
}

export default Menu;
