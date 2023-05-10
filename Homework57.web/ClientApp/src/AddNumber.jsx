import React from 'react';
import { produce } from 'immer';


class AddNumber extends React.Component {
    render() {
        const newRandomDecimal = Math.random();
        const newRandomNumber = Math.round(newRandomDecimal * 100);
        return <h1>{newRandomNumber}</h1>;

    }
}
export default AddNumber;
