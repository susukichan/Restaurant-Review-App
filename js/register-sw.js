//Make sure SW are supported
if ("serviceWorker" in navigator) {
  // Locate the service worker on github pages since its under the <repo-name> and not top-level.
  // Example of service-worker URL on github-pages
  // https://{username}.github.io/{repo-name}/sw.js
  const resolveServiceWorker = () =>
    window.location.href.includes("github.io")
      ? `${window.location.href}sw.js`
      : "/sw.js";

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(resolveServiceWorker())
      .then(reg => console.log("Service Worker: Registered"))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
