import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import microfrontendLayout from "./microfrontend-layout.html";

function getTemplate(template){
  console.log("template",template);
  if(!template){
    customStart(microfrontendLayout)
  }
  else {
    fetch(`/template/${template}-layout.html`).then((res) => res.text()).then((res) => {
      console.log(res);
      customStart(res)
      return res;
    }).catch((err) => {
      // LOAD DEFAULT TEMPLATE
      customStart(microfrontendLayout)
      console.log(err);
      return null;
    })
  }
  
}

function customStart(layoutHtml){
  const routes = constructRoutes(layoutHtml);
  const applications = constructApplications({
    routes,
    loadApp({ name }) {
      return System.import(name);
    },
  });
  const layoutEngine = constructLayoutEngine({ routes, applications });

  applications.forEach(registerApplication);
  layoutEngine.activate();
  start();
}

const template = localStorage.getItem('template')

getTemplate(template)


