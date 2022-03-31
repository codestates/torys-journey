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
}; //!토큰과 id 담는 reducer

const initialLoginState = {
  isLogin: false,
};

type LoginAction = { type: "login"; payload: { isLogin: boolean } };

export const changeLoginStatus = (
  state = initialLoginState,
  action: LoginAction
) => {
  if (action.type === "login") {
    // console.log(state);
    return {
      ...state,
      isLogin: action.payload.isLogin,
    };
  } else {
    return state;
  }
}; //!아이디 유지하는 isLogin 관리

const initialModalState = {
  requestSignOut: false,
};

type ModalAction = { type: "modal"; payload: { requestSignOut: boolean } };

export const changeModalStatus = (
  state = initialModalState,
  action: ModalAction
) => {
  // console.log(action.payload);
  if (action.type === "modal") {
    // console.log(state.accessToken);
    return {
      ...state,
      requestSignOut: action.payload.requestSignOut,
    };
  } else {
    return state;
  }
}; //! 로그아웃

const initialEnrollmentState = {
  name: "",
  address: "",
  phoneNumber: "",
  officeHours: "",
  detailInfo: "",
};

type EnrollmentAction = {
  type: "enrollment";
  payload: {
    name: "";
    address: "";
    phoneNumber: "";
    officeHours: "";
    detailInfo: "";
  };
};

export const restaurantEnrollment = (
  state = initialEnrollmentState,
  action: EnrollmentAction
) => {
  if (action.type === "enrollment") {
    // console.log(state.accessToken);
    return {
      ...state,
      name: action.payload.name,
      address: action.payload.address,
      phoneNumber: action.payload.phoneNumber,
      officeHours: action.payload.officeHours,
      detailInfo: action.payload.detailInfo,
    };
  } else {
    return state;
  }
}; //! 식당 등록 페이지 넘겨주기
