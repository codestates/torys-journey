const initialState = {
  id: "",
  accessToken: "",
};

type Action = { type: "accessToken"; payload: { id: ""; accessToken: "" } };

export const Reducer = (state = initialState, action: Action) => {
  if (action.type === "accessToken") {
    // console.log(state.accessToken);
    return {
      ...state,
      id: action.payload.id,
      accessToken: action.payload.accessToken,
    };
  } else {
    return state;
  }
}; //토큰과 id 담는 reducer

const initialLoginState = {
  isLogin: false,
};

type LoginAction = { type: "login"; payload: { isLogin: boolean } };

export const changeLoginStatus = (
  state = initialLoginState,
  action: LoginAction
) => {
  if (action.type === "login") {
    // console.log(state.accessToken);
    return {
      ...state,
      isLogin: action.payload.isLogin,
    };
  } else {
    return state;
  }
}; //아이디 유지하는 isLogin 관리

const initialModalState = {
  requestSignOut: false,
};

type ModalAction = { type: "modal"; payload: { requestSignOut: boolean } };

export const changeModalStatus = (
  state = initialModalState,
  action: ModalAction
) => {
  console.log(action.payload);
  if (action.type === "modal") {
    // console.log(state.accessToken);
    return {
      ...state,
      requestSignOut: action.payload.requestSignOut,
    };
  } else {
    return state;
  }
}; //아이디 유지하는 isLogin 관리
