import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
       
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo vero quia repellendus. Soluta magni repellat dignissimos consequatur dolor repudiandae enim omnis sit, incidunt natus accusamus? Magnam, eveniet. Ab, et.</p>
        <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                        return (
                                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}className="explore-menu-item" key={index}>
                                     <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                                     <p>{item.menu_name}</p>
                                </div>
                        );
                })}
        </div>
        <hr />

    </div>
  )
}

export default ExploreMenu;