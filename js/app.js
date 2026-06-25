let transactions =
    Storage.getTransactions();

UI.renderTransactions(
    transactions
);

UI.updateDashboard(
    transactions
);

const form =
    document.getElementById(
        "transaction-form"
    );

form.addEventListener(
    "submit",
    e => {

        e.preventDefault();

        const description =
            document.getElementById(
                "description"
            ).value;

        const amount =
            document.getElementById(
                "amount"
            ).value;

        const type =
            document.getElementById(
                "type"
            ).value;

        const transaction = {

            id: Date.now(),

            description,

            amount,

            type

        };

        transactions.push(
            transaction
        );

        Storage.saveTransactions(
            transactions
        );

        UI.renderTransactions(
            transactions
        );

        UI.updateDashboard(
            transactions
        );

        form.reset();

    }
);