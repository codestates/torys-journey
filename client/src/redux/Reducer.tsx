const LOGINCHECK = "logincheck";
const LOGOUTCHECK = "logoutcheck";

export const loginCheck = () => {
  return {
    type: LOGINCHECK,
  };
};

export const logoutClickevent = () => {
  console.log("logoutaction");
  return {
    type: LOGOUTCHECK,
  };
};

const initialStore = { isLogin: false };

export const changeLoginStatus = (
  state = initialStore,
  action: { type: any }
) => {
  switch (action.type) {
    case LOGINCHECK:
      return { ...state, isLogin: true };
    case LOGOUTCHECK:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

//!아이디 유지하는 isLogin 관리

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
