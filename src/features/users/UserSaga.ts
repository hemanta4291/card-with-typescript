import {takeEvery,delay,put} from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers, increment, incrementBySaga, incrementBySagaSuccess } from './UserSlice'
// import { delay } from '@reduxjs/toolkit/dist/utils'


// function* log (action:PayloadAction){
//     console.log("log",action)
// }

function* handleIncrimentBySaga(action: PayloadAction<number>){
    console.log("saga waiting 2 s....")

    yield delay(2000)

    console.log('waiting done, dispatch action')

    yield put(incrementBySagaSuccess())
}

export default function* UserSaga (){
    console.log('user saga')
    yield takeEvery(incrementBySaga.toString(),handleIncrimentBySaga)
}