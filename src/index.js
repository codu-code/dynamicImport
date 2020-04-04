document.getElementById("button").addEventListener("click", async () => {
  const module = await import("./app.js");
  module.app();
});
