import React, { createContext, Component } from "react";
// 创建context对象
const context = createContext();
const { Provider, Consumer } = context;

class ContextProvider extends Component {
    state = {
        a: 10,
        b: 20
    };
    render() {
        return (
            <>
                <Provider value={{ ...this.state, changea: this.changea }}>
                    {this.props.children}
                </Provider>
            </>
        )
    };
    changea = (n) => {
        this.setState({
            a: n
        })
    }
}


export {
    context,
    ContextProvider,
    Consumer
}