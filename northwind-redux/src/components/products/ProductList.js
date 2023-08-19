import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table,Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartAction"
import alertify from "alertifyjs";

class ProductList extends Component {
    
    componentDidMount() {
        this.props.actions.getProduct()
        
        
    }
    
    addThisCart=(product)=>{
        this.props.actions.addCart(product)
        alertify.success(product.productName+" Added to cart")
        
    }
    render() {
        return (
            <div>
                <Badge color="dark">
                    Products
                </Badge>
                <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                Product Name
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (

                                <tr key={product.id}>
                                    <td>
                                        {product.productName}
                                    </td>
                                    <td>
                                        <Button
                                        onClick={()=>
                                            this.addThisCart(product)
                                        }
                                        >Add To Cart</Button>
                                    </td>
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
        currentCategory: state.changeCategoryReducer,
        products: state.getProductReducer,
        cart:state.addToCartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProduct: bindActionCreators(productActions.getProducts, dispatch),
            addCart:bindActionCreators(cartActions.addToCart,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)