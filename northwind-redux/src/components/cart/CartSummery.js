import React, { Component } from "react";
import { bindActionCreators } from "redux"
import * as cartAction from "../../redux/actions/cartAction"
import { connect } from "react-redux";
import { Table, Badge, Spinner } from "reactstrap";
import alertify from "alertifyjs";

class CartSummery extends Component {
    sepettenSil(cart){
        this.props.actions.deleteCart(cart)
        alertify.error(cart.productName+" discart!!")
    }
    render(){
        return(
            <div>
                {this.props.cart.length>0?this.renderVar():this.renderYok()}
            </div>
        )
    }
    renderYok() {
        return (
            <div>
                <Spinner color="secondary">
                    Loading...
                </Spinner>
            </div>
        )
    }
    renderVar() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Product Name
                            </th>
                            <th>
                                quantity
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cart => (
                                <tr className="table-secondary">
                                    <td>
                                        {cart.productName}
                                    </td>
                                    <td>
                                        {cart.quantity}
                                    </td>
                                    <td><Badge onClick={() => {
                                        this.sepettenSil(cart)
                                    }} color="danger">Discart</Badge></td>
                                </tr>
                            ))

                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.addToCartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            deleteCart: bindActionCreators(cartAction.deleteCart, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummery)
