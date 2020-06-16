import React from "react";
import Lizt from './Lizst';

class FetchLiztData extends React.Component {


    render(props) {

        return (
            <div>
                {this.props.lizts.map((lizt, index) => (
                    <Lizt key={index} title={lizt.title} items={lizt.items}/>
                ))}

            </div>
        )

    }


}

export default FetchLiztData
