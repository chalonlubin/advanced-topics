"use strict";
/** Quick refresher for interview prep going over all the different ways we can call an API. */


/** Base URL for API Calls */
const API_URL = "https://dog.ceo/api";

/** Vanilla DOM connection */
const fetchButton = document.querySelector("#fetch");
const asyncButton = document.querySelector("#async");
const axiosButton = document.querySelector("#axios");
const axiosAsyncButton = document.querySelector("#axios-async");
const xmlButton = document.querySelector("#xml");

/** Event listeners */
fetchButton.addEventListener("click", callApiFetch);
asyncButton.addEventListener("click", callApiAsync);
axiosAsyncButton.addEventListener("click", callApiAxiosAsync);
axiosButton.addEventListener("click", callApiAxios);
xmlButton.addEventListener("click", callApiXml);

/** Calls API using the fetch, .then and .catch, returning a random dog image. */
function callApiFetch() {
  fetch(`${API_URL}/breeds/image/random`)
    .then((response) => response.json()) // convert to json
    .then((data) => {
      // handle data
      let image = document.createElement("img");
      image.src = data.message;

      document.querySelector(".main").append(image);
    })
    .catch((error) => console.log(error));
}

/** Calls API using axios, with async and await, returning a random dog image. */
async function callApiAsync() {
  try {
    let response = await fetch(`${API_URL}/breeds/image/random`);
    let data = await response.json();
    let image = document.createElement("img");
    image.src = data.message;
    document.querySelector(".main").append(image);
  } catch (err) {
    console.log(err);
  }
}

/** Calls API using axios, with async and await, returning a random dog image. */
async function callApiAxiosAsync() {
  try {
  let response = await axios.get(`${API_URL}/breeds/image/random`);
  let image = document.createElement("img");
  image.src = response.data.message;
  document.querySelector(".main").append(image);
} catch (err) {
  console.log(err);
}
}

/** Calls API using axios, with async and await, returning a random dog image. */
async function callApiAxios() {
  await axios.get(`${API_URL}/breeds/image/random`)
  .then(response => {
    let image = document.createElement("img");
    image.src = response.data.message;
    document.querySelector(".main").append(image);
  })
  .catch(error => console.log(error));
}

/** Calls API using the dated XML method, returning a random dog image. */
function callApiXml() {
  let request = new XMLHttpRequest();
  request.open("GET", `${API_URL}/breeds/image/random`);
  request.send();
  request.onload = () => {
    console.log(request);
    if (request.status === 200) {
      let data = JSON.parse(request.response);
      let image = document.createElement("img");
      image.src = data.message;
      document.querySelector(".main").append(image);
    } else {
      console.log(`error ${request.status} ${request.statusText}`);
    }
  };
}
