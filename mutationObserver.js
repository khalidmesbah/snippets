// to watch the changes in the dom

const config = {
  subtree: true,
  attributes: true,
  childList: true,
};

const callback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("children node is added or removed");
    } else if (mutation.type === "attributes") {
      console.log("attributes modified");
    }
  }
};

setTimeout(() => {
  const div = document.createElement("div");
  div.innerHTML = "Div element is added to the dom";
  document.body.appendChild(div);
}, 1000);
setTimeout(() => {
  document.body.lastElementChild.remove();
}, 1000);

const observer = new MutationObserver(callback);
// observer.observe(targetNode, config);
observer.observe(document.body, config);
