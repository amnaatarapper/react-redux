import React, { useState } from 'react';
import { connect } from 'react-redux';

import { buyCake } from '../redux';

const NewCakeContainer = ({buyCake}) => {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Buy Cakes</h2>
            <input type="text" value={number} onChange={event => setNumber(event.target.value)}/>
            <button onClick={() => buyCake(number)}>Buy "{number}" Cakes</button>
        </div>
    )
}

// Access what you need from Redux Store
 // Retrieve State Props
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// Dispatch Store Actions
const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => {
            dispatch(buyCake(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);