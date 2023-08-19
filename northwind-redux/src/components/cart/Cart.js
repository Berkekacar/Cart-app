import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import { bindActionCreators } from "redux";
import * as cartAction from "../../redux/actions/cartAction"

class Cart extends Component {
    renderYok(){
        return(
            <div>
                <NavItem>
                    <NavLink>your cart is empty</NavLink>
                </NavItem>
            </div>
        )
    }
    renderVar() {
        return (
            
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Cart
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            this.props.cart.map(cart => (
                                <DropdownItem key={cart.id}><Badge onClick={()=>this.props.actions.deleteCart(cart)} color="danger">X</Badge> {cart.productName}-{cart.quantity}</DropdownItem>
                            ))
                            
                        }
                        <DropdownItem>
                            <Link to="/cart">Go to cart</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            
        )
    }
    render(){
        return(
            <div>
                {this.props.cart.length>0?this.renderVar():this.renderYok()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.addToCartReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            deleteCart:bindActionCreators(cartAction.deleteCart,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)


