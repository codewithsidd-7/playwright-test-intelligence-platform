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
        account: '17340',
        transactionId: '14476'
    },

    byDate: {
        account: '17340',
        date: '2026-07-08'
    },

    byDateRange: {
        account: '17340',
        fromDate: '2026-07-01',
        toDate: '2026-07-31'
    },

    byAmount: {
        account: '17340',
        amount: '1000'
    }

}
};