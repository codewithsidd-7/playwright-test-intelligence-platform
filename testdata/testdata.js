export const testData = {
    validUser: {
        username: 'john',
        password: 'demo'
    },

    invalidUser: {
        username: 'test',
        password: 'test'
    },

    emptyUser: {
        username: '',
        password: ''
    },

    accountTypes: {
        savings: 'SAVINGS',
        checking: 'CHECKING',
        existingAccount: '12345'
    },

    transferFunds: {
        amount: '50',
        fromAccount: '12345',
        toAccount: '12456'
    },
    billPay: {
        payeeName: 'John Doe',
        address: '123 Main Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipCode: '400001',
        phoneNumber: '9876543210',
        accountNumber: '12345',
        verifyAccountNumber: '12345',
        amount: '10',
        fromAccount: '12567'
    },

    findTransactions: {
    byTransactionId: {
        account: '12345',
        transactionId: '27130',
        expectedDescription: 'Funds Transfer Sent'
    },

    byDate: {
        account: '12345',
        date: '07-23-2026',
        expectedTransactionCount: 0
    },

    byDateRange: {
        account: '12345',
        fromDate: '07-22-2026',
        toDate: '07-24-2026',
        expectedTransactionCount: 39
    },

    byAmount: {
        account: '12345',
        amount: '1000',
        expectedDescription: 'Funds Transfer Sent'
    }
}
};