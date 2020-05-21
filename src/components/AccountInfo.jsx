import React from 'react';

class AccountInfo extends React.Component {
    render() {
        const { displayedAccount } = this.props;

        return (
            <div>
                <h1>Выбранный счет:</h1>
                <p>Номер счёта: {displayedAccount.id}</p>
                <p>Остаток средств: {displayedAccount.amount}</p>
                <p>Остаток средств: {displayedAccount.customer_Email}</p>
                ...
            </div>
        );
    }
}

export { AccountInfo };