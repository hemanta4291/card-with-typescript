
import {all} from 'redux-saga/effects'
import UserSaga from '../features/users/UserSaga'

function* hello (){
    console.log('hello saga')
}

export default function* rootSaga() {
    console.log('rootsaga')
    yield all([UserSaga(),hello()])
}