import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchParams from "../services/fetchService";
import netPing from "../services/pingService";

const initialState = {
  loading: false,
  data:[],
  singleData: [],
  dataOk:false,
  pressed: false,
  squeezed:false,
  loadingPing:false,
  pingRes:{msg:'',body:'',status:'cleared'},
  volData:{loading:'false',body:'',ok:false},
  pnlData:{loading:'false',body:'',ok:false},
  priceData:{loading:'false',body:'',ok:false}
};

// export const createTutorial = createAsyncThunk(
//   "tutorials/create",
//   async ({ title, description }) => {
//     const res = await fetchParams.create({ title, description });
//     return res.data;
//   }
// );

export const fetchData = createAsyncThunk(
  "datas/fetchData",
  async () => {
    const res = await fetchParams.getAll("products");
    return res.data;
  }
);

export const ping = createAsyncThunk(
  "createPing/get",
  async (uri) => {
    const res = await netPing.getAll(uri);
    return res.data;
  }
);

export const fetchVol = createAsyncThunk(
  "fetchVol/get",
  async (mth) => {
    const res = await fetchParams.getAllOrderSpecData(mth);
    return res.data;
  }
);

export const fetchPnl = createAsyncThunk(
  "fetchPnl/get",
  async (mth) => {
    const res = await fetchParams.getAllPnl(mth);
    return res.data;
  }
);

export const fetchPrice = createAsyncThunk(
  "fetchPrice/get",
  async () => {
    const res = await fetchParams.getAllPrice();
    return res.data;
  }
);





const usersReducer = createSlice({
  name: "datas",
  initialState,
  reducers:{
    press: (state) => {
      state.pressed = true
    },
    squeeze: (state) => {
      state.squeezed = true
    },
    clearPing: (state) => {
      state.pingRes = {msg:'',body:'',status:'cleared'}
    }    
  },
  extraReducers: {
    [fetchData.pending]: (state,action) => {
      state.loading = true
    },
    [fetchData.fulfilled]: (state,action) => {
      state.loading = false;
      state.data = [...action.payload];
      state.dataOk = true
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
    },


    [ping.pending]:(state,action) => {
      state.loadingPing = true
    },
    [ping.fulfilled]:(state,action) => {
      state.loadingPing = false;
      state.pingRes = {msg:'Ping Success',body:action.payload,status:'success'}
    },
    [ping.rejected]:(state,action) => {
      state.loadingPing = false;
      state.pingRes = {msg:'Ping Failed',body:'Unable To Establish Connection',status:'failed'}
    },
    [fetchVol.pending]:(state,action) => {
      state.volData = {loading:'true',body:[]}
    },
    [fetchVol.fulfilled]:(state,action) => {
      state.volData = {loading:'false',body:action.payload.data,ok:true}
    },
    [fetchVol.rejected]:(state,action) => {
      state.volData = {loading:'false',body:'err'}
    },
    [fetchPnl.pending]:(state,action) => {
      state.pnlData = {loading:'true',body:[]}
    },
    [fetchPnl.fulfilled]:(state,action) => {
      state.pnlData = {loading:'false',body:action.payload.data,ok:true}
    },
    [fetchPnl.rejected]:(state,action) => {
      state.pnlData = {loading:'false',body:'err'}
    },
    [fetchPrice.rejected]:(state,action) => {
      state.priceData = {loading:'false',body:'err'}
    },
    [fetchPrice.fulfilled]:(state,action) => {
      state.priceData = {loading:'false',body:action.payload.data,ok:true}
    },
    [fetchPrice.pending]:(state,action) => {
      state.priceData = {loading:'true',body:''}
    },

  }

});

export const { press, squeeze, clearPing } = usersReducer.actions;

const { reducer } = usersReducer;
export default reducer;