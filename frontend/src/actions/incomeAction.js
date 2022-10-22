import { ADD_INCOME } from "../constants/spendingConstant"

export const addIncome = (incomeData) => {
    return {
        type: ADD_INCOME,
        payload: incomeData
    }
}