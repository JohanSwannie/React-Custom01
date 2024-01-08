function customRender(reactElements, container) {
  for (const element in reactElements) {
    const domElement = document.createElement(reactElements[element].type);
    domElement.innerHTML = reactElements[element].children;
    for (const prop in reactElements[element].props) {
      if (prop !== "children") {
        domElement.setAttribute(prop, reactElements[element].props[prop]);
      }
    }
    container.appendChild(domElement);
  }
}

const reactElements = {
  element1: {
    type: "h1",
    props: {
      class: "header",
    },
    children: "Custom React",
  },
  element2: {
    type: "a",
    props: {
      href: "https://facebook.com",
      target: "_blank",
      class: "link",
    },
    children: "Click here for FACEBOOK",
  },
};

const mainContainer = document.querySelector("#root");

customRender(reactElements, mainContainer);
