export const fetchAccounts = () => {
    return fetch('https://localhost:5001/test', { // /api/accounts
        method: 'GET'
    })
        .then(response => response.json())
        .catch(error => {
            throw new Error(error.message);
        });
}