import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
 

  return (
    <div className="ui four item menu" onClick ={event => props.setDisplayMode(event)}>
      <a className="item active" id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a className="item" id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className="item" id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
