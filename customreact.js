function customRender(reactElements, container) {
  for (const element in reactElements) {
    if (element === "element5") {
      const parentElement = document.createElement("div");
      parentElement.setAttribute("class", "links");
      for (const child in reactElements[element]) {
        const domElement = document.createElement(
          reactElements[element][child].type
        );
        domElement.innerHTML = reactElements[element][child].description;
        for (const prop in reactElements[element][child].props) {
          if (prop !== "description") {
            domElement.setAttribute(
              prop,
              reactElements[element][child].props[prop]
            );
          }
        }
        parentElement.appendChild(domElement);
        container.appendChild(parentElement);
      }
    } else {
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
    type: "h2",
    props: {
      class: "header2",
    },
    description: "The way React works behind the scenes",
  },
  element3: {
    type: "p",
    props: {
      id: "para",
    },
    description:
      "When using custom react, please be aware that this can be dangerous!",
  },
  element4: {
    type: "p",
    props: {
      id: "para",
    },
    description:
      "Therefore, take extremely good care in how you put together custom react!",
  },
  element5: {
    child1: {
      type: "a",
      props: {
        href: "https://facebook.com",
        target: "_blank",
        class: "link",
      },
      description: "FACEBOOK",
    },
    child2: {
      type: "a",
      props: {
        href: "https://twitter.com",
        target: "_blank",
        class: "link",
      },
      description: "TWITTER",
    },
    child3: {
      type: "a",
      props: {
        href: "https://instagram.com",
        target: "_blank",
        class: "link",
      },
      description: "INSTAGRAM",
    },
    child4: {
      type: "a",
      props: {
        href: "https://whatsapp.com",
        target: "_blank",
        class: "link",
      },
      description: "WHATSAPP",
    },
    child5: {
      type: "a",
      props: {
        href: "https://linkedin.com",
        target: "_blank",
        class: "link",
      },
      description: "LINKEDIN",
    },
    child6: {
      type: "a",
      props: {
        href: "https://github.com",
        target: "_blank",
        class: "link",
      },
      description: "GITHUB",
    },
    child7: {
      type: "a",
      props: {
        href: "https://google.com",
        target: "_blank",
        class: "link",
      },
      description: "GOOGLE",
    },
  },
};

const mainContainer = document.querySelector("#root");

customRender(reactElements, mainContainer);
