const initState = {
  botaoClicado: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case 'BOTAO_CLICADO':
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    default:
      return state;
  }
}
