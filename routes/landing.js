const app = document.querySelector("#app");

function landing() {
  app.innerHTML = `
    <a href="/signup">Sign up</a>
    <a href="/login">Log in</a>
  <a href="/home">Home</a>
`;
}

export default landing;
