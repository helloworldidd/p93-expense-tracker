const Storage = {

    getTransactions() {

        return JSON.parse(
            localStorage.getItem("transactions")
        ) || [];

    },

    saveTransactions(data) {

        localStorage.setItem(
            "transactions",
            JSON.stringify(data)
        );

    }

};