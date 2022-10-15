import axios from "axios";
import create from "zustand";

//axios.defaults.withCredentials = true; //CORS 오류 때문에 추가

// netlify proxy setting
export const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

export const useStore = create((set, get) => ({
  articles: {
    economy: [],
    culture: [],
    society: [],
    sports: [],
    entertain: [],
    politic: [],
    IT: [],
  },
  //withCredentials: true, // 추가

  getArticles: async () => {
    const ecoResponse = await axios.get(`${PROXY}/economy`);
    const culResponse = await axios.get(`${PROXY}/culture`);
    const socResponse = await axios.get(`${PROXY}/society`);
    const spoResponse = await axios.get(`${PROXY}/sports`);
    const entResponse = await axios.get(`${PROXY}/entertain`);
    const polResponse = await axios.get(`${PROXY}/politics`);
    const itResponse = await axios.get(`${PROXY}/it`);

    let it = [];
    let eco = [];
    let cul = [];
    let soc = [];
    let spo = [];
    let ent = [];
    let pol = [];

    for (let x of ecoResponse.data) {
      eco.push(x);
    }
    for (let x of culResponse.data) {
      cul.push(x);
    }
    for (let x of socResponse.data) {
      soc.push(x);
    }
    for (let x of spoResponse.data) {
      spo.push(x);
    }
    for (let x of entResponse.data) {
      ent.push(x);
    }
    for (let x of polResponse.data) {
      pol.push(x);
    }
    for (let x of itResponse.data) {
      it.push(x);
    }
    set({
      articles: {
        IT: it,
        economy: eco,
        culture: cul,
        society: soc,
        sports: spo,
        entertain: ent,
        politic: pol,
      },
    });
  },
}));
