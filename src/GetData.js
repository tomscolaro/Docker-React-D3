import React from "react"


class GetData extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }

    componentDidMount() {
        MyApiCall.then(
            res => this.setState({
                // using spread operator, you will need transform-object-rest-spread from babel or
                // another transpiler to use this
                ...this.state, // spreading in state for future proofing
                isLoaded: true,
                data: res.data
            })
        );
    }

    render() {
        const { isLoaded, data } = this.state;
        return (
            {
              data
               
            }
        );
    }

}

