'use strict'

// ----------------------------------------------------------------------------

const log       = require ('ololog')
    , ansi      = require ('ansicolor').nice
    , chai      = require ('chai')
    , expect    = chai.expect
    , assert    = chai.assert
    , testTransaction = require ('./test.transaction.js')

/*  ------------------------------------------------------------------------ */

module.exports = async (exchange, symbol) => {

    if (exchange.has.fetchTransactions) {

        // log ('fetching transactions...')

        let transactions = await exchange.fetchTransactions (symbol)

        log ('fetched', orders.length.toString ().green, 'transactions, asserting each...')

        assert (transactions instanceof Array)

        let now = Date.now ()

        for (let i = 0; i < transactions.length; i++) {
            let transaction = transactions[i]
            testTransaction (exchange, transaction, symbol, now)
        }

        // log (asTable (transactions))

    } else {

        log ('fetching transactions not supported')
    }
}