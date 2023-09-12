import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { BiHomeSmile } from "react-icons/bi"
import {Button, ButtonCont} from './styledNav.js'
import SearchBar from '../SearchBar/SearchBar'

function Nav({onSearch}) {
  return (
    <div>
      <ButtonCont> 
        <Link to='/home'> <Button> HOME</Button></Link>
        <Link to='/favorites'> <Button>💛</Button></Link>
        <SearchBar onSearch={onSearch}/>
        <Link to='/about'> <Button> ABOUT </Button> </Link>
        </ButtonCont>
    </div>
  )
}

export default Nav


/*
! Componentes Funcionales
import React, {useState} from 'react'


function Nav (props){
  let {name, age} = props -> destructuring
  === function Nav({name, age})
  return (
    <lo que queremos que se muestre> props.name
  )
}

!Componentes de Clase

class Nav extends React.component {
  constructor(props){
    super(props)

    this.state = {}
  }
render(){
<this.props.name>
}

}

*/