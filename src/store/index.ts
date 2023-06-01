/* eslint-disable prettier/prettier */
import { MutationTree, ActionTree } from "vuex";
import { createStore, Store } from "vuex";
import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

// Define the state interface
interface RootState {
  message: string;
  showModel: boolean;
  count: number;
  limitData: number;
  products: any[];
  product: any[];
  searchText: string;
}

// Define the mutations, if the state update in client there is no need to go to with actions, only mutations is needed
const mutations: MutationTree<RootState> = {
  updateMessage(state, newMessage: string) {
    state.message = newMessage;
  },

  showModel(state, newState: boolean) {
    state.showModel = newState;
  },

  IncCounter(state) {
    state.count = state.count + 1;
  },

  DecCounter(state) {
    state.count = state.count - 1;
  },

  fetchProducts(state, products) {
    state.products = products;
  },

  fetchProduct(state, product) {
    state.product = product;
  },
};

// Define the actions
const actions: ActionTree<RootState, RootState> = {
  async getProducts({ commit }, payload) {
    if (payload == "fetchMore") {
      this.state.limitData = this.state.limitData + 5;
    } else if (payload == "fetchLess") {
      this.state.limitData = this.state.limitData - 5;
    } else {
      this.state.limitData = 0;
    }
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${this.state.limitData}
      `
    );
    const data = await response.json();

    commit("fetchProducts", data);
  },

  async getSingleProduct({ commit }, payload) {
    const response = await fetch(
      `https://fakestoreapi.com/products/${payload}`
    );
    const data = await response.json();

    commit("fetchProduct", data);
  },
};

// Create the store options
const storeOptions: StoreOptions<RootState> = {
  state: {
    message: "Hello, Vuex!",
    showModel: false,
    count: 1,
    limitData: 5,
    products: [],
    product: [],
    searchText: "nothing",
  },
  mutations,
  actions,
};

// Create the store instance
const store = new Vuex.Store<RootState>(storeOptions);

export default store;
