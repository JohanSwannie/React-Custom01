function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop !== "children") {
      alert(prop);
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://facebook.com",
    target: "_blank",
    class: "link",
  },
  children: "FACEBOOK",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
