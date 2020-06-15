import React from 'react';
import IndivLizt from './Indiv_lizst_show';

class IndivLiztFetch extends React.Component {
    constructor() {
        super();
        this.state = {
            lizts: [],
        }
    }

    async componentDidMount() {

        const url = `http://localhost:8000/lizts/?format=json`;

        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({ lizts: response })
            });

    }

    render() {

        return (
            <div>
                {this.state.lizts.map((lizt, index) => (
                    <IndivLizt key={index} title={lizt.title} items={lizt.items} />
                ))}

            </div>
        )

    }
}

export default IndivLiztFetch;