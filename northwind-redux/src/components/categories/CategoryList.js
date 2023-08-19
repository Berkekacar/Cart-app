import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions"
import { ListGroup, ListGroupItem } from "reactstrap";
import {Badge} from "reactstrap"
import * as productActions from "../../redux/actions/productActions"

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
        this.props.actions.getProduct()
    }
    selectCategory=(category)=>{
        this.props.actions.getProduct(category.id)
        this.props.actions.changeCategory(category)
        
    }
    onDoubleClick=(category)=>{
        this.props.actions.deleteCategory(category)
        this.props.actions.getProduct()

    }
    render() {
        return (
            <div>
                <Badge color="dark">
                    Categories
                </Badge>
                <ListGroup>
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem color="success"
                             key={category.id} 
                             onDoubleClick={()=>this.onDoubleClick(category)}
                             onClick={()=>this.selectCategory(category)}
                             active={category.id===this.props.currentCategory.id?true:false}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch) ,
            deleteCategory:bindActionCreators(categoryActions.deleteCategory,dispatch),
            getProduct:bindActionCreators(productActions.getProducts,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)