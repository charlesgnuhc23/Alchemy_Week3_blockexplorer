const { Alchemy, Utils } = require('alchemy-sdk');
const alchemy = new Alchemy();

export function Transactions(txns) {
    const {transactions} = txns;
    return (
        <div>
            {transactions && transactions.map((tx, i) => {
                const ethValue = Utils.formatEther(tx.value);
                return (
                    <div key={"tx-${i}"}>
                        <h4>Hash: {tx.hash}</h4>
                        <p>From: {tx.from}</p>
                        <p>To: {tx.to}</p>
                        <p>Value: {ethValue} ETH</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}