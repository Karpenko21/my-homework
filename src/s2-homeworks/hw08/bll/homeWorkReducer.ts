import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            switch (action.payload) {
                case "up" : {
                    const copyState = [...state]
                    return copyState.sort((a, b) => a.name.localeCompare(b.name)) // need to fix
                }
                case "down": {
                    const copyState = [...state]
                    return copyState.sort((a, b) => b.name.localeCompare(a.name)) // need to fix
                }
            }
        }

        case 'check': {
            return state.filter(u => u.age >=action.payload) // need to fix
        }
        default:
            return state
    }
}
