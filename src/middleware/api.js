import { POKEAPI_ROOT } from '../constants';

export function callAPIMiddleware({ dispatch, getState }) {
    return next => action => {
        const {
        types,
            endpoint,
            shouldCallAPI = () => true,
            payload = {}
      } = action

        if (!types) {
            // Normal action: pass it on
            return next(action)
        }

        if (
            !Array.isArray(types) ||
            types.length !== 3 ||
            !types.every(type => typeof type === 'string')
        ) {
            throw new Error('Expected an array of three string types.')
        }

        if (!endpoint) {
            throw new Error('Expected endpoint not to be empty.')
        }

        if (!shouldCallAPI(getState())) {
            return
        }

        const [requestType, successType, failureType] = types

        dispatch(
            Object.assign({}, payload, {
                type: requestType
            })
        )

        return fetch(`${POKEAPI_ROOT}${endpoint}`).then(response => response.json()).then(
            response =>
                dispatch(
                    Object.assign({}, payload, {
                        response,
                        type: successType
                    })
                ),
            error =>
                dispatch(
                    Object.assign({}, payload, {
                        error,
                        type: failureType
                    })
                )
        )
    }
}
