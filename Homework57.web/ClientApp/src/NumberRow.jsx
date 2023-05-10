import React from 'react';

class NumberRow extends React.Component {
    
    onSelectClick = () => {
        this.props.onNumberSelectClick(this.props.number);
    }

    render() {
        const { number, selectedNumbers } = this.props;
        let numberState = '';
        if (selectedNumbers) {
            if (selectedNumbers.includes(number)) {
                numberState = 'selected';
            }
            else {
                numberState = '';
            }
        }
        console.log(numberState);
        return <tr>
            <td>{number}</td>
            <td><button className={this.numberState==='selected' ? 'btn btn-danger' : 'btn btn-success'} onClick={this.onSelectClick}>Select</button>
            </td>
        </tr>
    }

}

export default NumberRow;