import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.sort((a, b) => a.name.localeCompare(b.name)) // need to fix
            /*if (action.payload === 'up') {

            } else if (action.payload === 'down') {
                return state.sort((a, b) => b.name.localeCompare(a.name)) // need to fix
            }*/
        }
        case 'check': {

            return state // need to fix
        }
        default:
            return state
    }
}
