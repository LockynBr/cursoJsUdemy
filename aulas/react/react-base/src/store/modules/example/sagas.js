import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 2000);
  });

function* exampleRequest() {
  try {
    // Se der certo ele dispara o sucesso
    yield call(request);
    yield put(actions.buttonClickedSucess());
  } catch (e) {
    // Se der erro chama a action de erro
    toast.error('Deu erro!');
    yield put(actions.buttonClickedFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
