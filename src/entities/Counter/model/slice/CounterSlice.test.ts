import { CounterSchema } from "../types/CounterSchema"
import { counterActions, counterReducer } from "./CounterSlice"



describe('ConterSlice', () => {
    test('increment', () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.increment)).toEqual({value:11})
    })
    test('decrement', () => {
        const state: CounterSchema = {value: 10}
        expect(counterReducer(state, counterActions.decrement)).toEqual({value: 9})
    })
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({value: 1})
    })
})