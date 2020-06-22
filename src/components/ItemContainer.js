import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIcecream } from '../redux';

const ItemContainer = ({item, itemName, buyItem}) => {
    return (
        <div>
            <h2>Buy {itemName} - {item} </h2>
            <button onClick={buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams;
    return {
        item: itemState,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream());

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);