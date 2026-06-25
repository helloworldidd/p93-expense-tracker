const UI = {

    renderTransactions(data) {

        const list =
            document.getElementById(
                "transaction-list"
            );

        list.innerHTML = "";

        data.forEach(item => {

            const li =
                document.createElement("li");

            li.className =
                `list-group-item ${
                    item.type === "income"
                        ? "income-item"
                        : "expense-item"
                }`;

            li.innerHTML = `
                <span>
                    ${
                        item.type === "income"
                            ? "🟢"
                            : "🔴"
                    }
                    ${item.description}
                </span>

                <span>
                    ${
                        item.type === "income"
                            ? "+"
                            : "-"
                    }$${Number(item.amount).toLocaleString("es-CL")}
                </span>
            `;

            list.appendChild(li);

        });

    },

    updateDashboard(data) {

        const income =
            data
                .filter(
                    t => t.type === "income"
                )
                .reduce(
                    (acc, t) =>
                        acc + Number(t.amount),
                    0
                );

        const expense =
            data
                .filter(
                    t => t.type === "expense"
                )
                .reduce(
                    (acc, t) =>
                        acc + Number(t.amount),
                    0
                );

        const balance =
            income - expense;

        document.getElementById(
            "income"
        ).textContent =
            `$${income.toLocaleString("es-CL")}`;

        document.getElementById(
            "expense"
        ).textContent =
            `$${expense.toLocaleString("es-CL")}`;

        document.getElementById(
            "balance"
        ).textContent =
            `$${balance.toLocaleString("es-CL")}`;

    }

};