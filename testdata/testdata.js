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
        accountNumber: '987654321',
        verifyAccountNumber: '987654321',
        amount: '10',
        fromAccount: '12567'
    }
};