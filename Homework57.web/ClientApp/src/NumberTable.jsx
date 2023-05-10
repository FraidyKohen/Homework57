import { Tab } from 'bootstrap';
import React from 'react';
import NumberRow from './NumberRow';


class NumberTable extends React.Component {
    state = {
        randomNumbers: [],
        selectedNumbers: []
    }

    onAddNumber = () => {
        console.log('add number clicked!');
        const randomNumbers = this.state.randomNumbers;
        const newRandomDecimal = Math.random();
        const newRandomNumber = Math.round(newRandomDecimal * 100);
        const updatedRandomNumbers = [...randomNumbers, newRandomNumber];
        this.setState({
            randomNumbers: updatedRandomNumbers
        });
    }

    onNumberSelectClick = (n) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(num => num !== n) });
        }
        else {
            this.setState({ selectedNumbers: [...selectedNumbers, n] });
        }
    }



    render() {
        const { randomNumbers, selectedNumbers } = this.state;
        console.log(this.state.randomNumbers);
        console.log(this.state.selectedNumbers);
        return (
            <div>
                <h1>Numbers:</h1>

                <button className='btn btn-info btn-lg w-100' onClick={this.onAddNumber}>Add Number</button>
                <table className='table table-striped table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Select?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.randomNumbers.map(n => <NumberRow
                            key={n}
                            number={n}
                            onNumberSelectClick={this.onNumberSelectClick}
                        />)}
                    </tbody>
                </table>
                <div>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Locked?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.selectedNumbers.map(n => <NumberRow
                                key={n}
                                number={n}
                                onNumberSelectClick={this.onNumberSelectClick}
                                selectedNumbers={selectedNumbers }
                            />)}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        );
    }
}

export default NumberTable;