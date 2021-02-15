import React from 'react';
import { connect } from 'react-redux';
import { Tab, AppBar, Tabs, Typography } from '@material-ui/core'



const ItemInCart = props => {
    return (
        <>
            <section>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CART&nbsp;&nbsp;&nbsp;{props.myCart.productsInCart.length}</span>
                  
                    <div>
                    <ul>
                        {props.myCart.productsInCart.map((item, idx) => {
                            return <li key={idx} >{item.name} </li>
                        })}
                    </ul>

                    </div>
            </section>
        </>


    )
}
const mapStateToProps = state => ({
    myCart: state.cart
});



export default connect(mapStateToProps)(ItemInCart)