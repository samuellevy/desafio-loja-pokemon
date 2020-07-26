import React, {useState} from 'react';
import Cart from '../Cart'
import {FaShoppingCart} from 'react-icons/fa'
import { ClickAwayListener } from '@material-ui/core';
import "./styles.css"

const Header = ({pokemonSelected}) => {
    
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };

    // console.log(pokemonSelected.length)
    return (
        <header id="main-header">
            <div className="box-header container">
                <div>LogoPokemon</div>
            <input 
                type="text"  
                id="search"
                placeholder="Buscar por Pokemon..." 
            />       

            <ClickAwayListener onClickAway={handleClickAway}>
            <div className="root">
                <div>
                    <button type="button" className="btn-header-cart" onClick={handleClick}>
                        
                    <FaShoppingCart /><span>{pokemonSelected.length}</span>
                    </button>
                </div>
                {open ? (
                    
                        <Cart 
                        pokemonSelected={pokemonSelected}
                        />
                    
                ) : null}
            </div>
            </ClickAwayListener>
            </div>  
        </header>
    )
};



export default Header;