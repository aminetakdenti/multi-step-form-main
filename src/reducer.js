export const init = {
  yourInfo: {
    name: "",
    email: "",
    phone: "",
  },
  selectPlan: {
    type: "Acard",
    priceType: "monthly",
    price: 9,
  },
  addOns: [],
};

export function getTotal(addOns, typePrice) {
  let sum = typePrice;
  addOns.forEach((ele) => {
    sum += ele[1];
  });
  return sum;
}

export default function reducer(state, action) {
  const { payloud, type } = action;
  switch (type) {
    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        yourInfo: payloud,
      };
    case "SELECT_PLAN":
      return {
        ...state,
        selectPlan: payloud,
      };
    case "ADD":
      return {
        ...state,
        addOns: [...state.addOns, payloud],
      };
    case "REMOVE":
      const addOneArr = [...state.addOns];
      let i = 0;
      for (i = 0; i < addOneArr.length; i++) {
        const element = addOneArr[i][0];
        if (element == payloud[0]) break;
      }
      addOneArr.splice(i, 1);
      return {
        ...state,
        addOns: [...addOneArr],
      };

    default:
      break;
  }
}
