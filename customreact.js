function customRender(reactElements, container) {
  for (const element in reactElements) {
    const domElement = document.createElement(reactElements[element].type);
    domElement.innerHTML = reactElements[element].description;
    for (const prop in reactElements[element].props) {
      if (prop !== "description") {
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
    description: "Custom React",
  },
  element2: {
    type: "p",
    props: {
      id: "para",
    },
    description:
      "When using custom react, please be aware that this can be dangerous!",
  },
  element3: {
    type: "p",
    props: {
      id: "para",
    },
    description:
      "Therefore, take extremely good care in how you put together custom react!",
  },
  element4: {
    type: "a",
    props: {
      href: "https://facebook.com",
      target: "_blank",
      class: "link",
    },
    description: "Click here for FACEBOOK",
  },
};

const mainContainer = document.querySelector("#root");

customRender(reactElements, mainContainer);
