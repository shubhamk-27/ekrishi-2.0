import { ADD_EXPENSE } from "../constants/spendingConstant"

export const addExpense = (expenseData) => {
    return {
        type: ADD_EXPENSE,
        payload: expenseData
    }
}