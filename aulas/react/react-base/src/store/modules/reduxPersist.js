import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'], // Só os modulos que queremos que salve; essa chave está no rootReducer.
    },
    reducers
  );

  return persistedReducers;
};
