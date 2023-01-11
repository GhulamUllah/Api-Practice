import {createStore,applyMiddleware} from 'redux'
import rootreducer from './reducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
const middleware=[thunk]

 const Store = createStore(rootreducer,
    composeWithDevTools(applyMiddleware(...middleware))
    )
 export default Store