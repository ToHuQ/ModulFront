import React from "react";

class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>Личный кабинет</h1>
                <button onClick={this.props.logout}>Выйти</button>
            </div>
        );
    }
};

export {Home};