import React from "react";
import Lizt from './Lizst';

class FetchLiztData extends React.Component {
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
                    <Lizt key={index} title={lizt.title} items={lizt.items} />
                ))}

            </div>
        )

    }


}

export default FetchLiztData
