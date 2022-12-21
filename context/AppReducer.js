export const initialState = {
    cpt: [],
    status: false
  };
  
export const AppReducer = (state, action) => {
    switch (action.type) {

        case "init_stored": {
            return { ...state, cpt: action.value };
        }

        case "init_status": {
            return { ...state, status: true };
        }
        
        case "cpt": {
            return {
                ...state,
                cpt: action.value,
            };
        }
    }
};