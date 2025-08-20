// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import shopifyLogo from './assets/work_logo/shopify.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import yourBackendLogo from './assets/work_logo/yourBackendLogo.jpg';
import businessLogo from './assets/work_logo/business.jpg';
import dennisshippingLogo from './assets/work_logo/Dennisshipping.jpg';





// ======================= Skills =======================
export const SkillsInfo = [
  {
    title: "Programming Languages & Technical Stack",
    skills: [
      { name: "C#" },
      { name: ".NET Core" },
      { name: "ASP.NET" },
      { name: "MVC" },
      { name: "MVVM" },
      { name: "Web API" },
      { name: "Blazor" },
      { name: "Razor" },
      { name: "Entity Framework" },
      { name: "LINQ" },
 
     
      { name: "C++" },
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      

    ],
  },
  {
    title: "Frontend / UI Frameworks",
    skills: [
      { name: "Angular (v1 to v12)" },
      { name: "Angular Material" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Redux" },
      {name:"Bootstrap"},
     { name: "Typescript" },
      { name: "Javascript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Sass" },
      { name: "Bootstrap" },
      { name: "Material UI" },
      { name: "Tailwind CSS" },
     

    ],
  },
  {
    title: "Databases & Data Tools",
    skills: [
      { name: "PostgreSQL" },
      { name: "XSL/XSLT" },
      { name: "DOM" },
      { name: "SAX" },
      { name: "XPath" },
      { name: "SOA" },
      { name: "WSDL" },
      { name: "XML Web Services" }
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Blazor with Syncfusion" },
      { name: "Web API Development" },
      { name: "CRUD Interfaces" },
      { name: "End-to-End Delivery" },
      { name: "Full Stack .NET Apps" },
      { name: "CRUD Interfaces" },
      {name :"SSRM"},
      {name:"STIMULSOFT REPORTS"},
      {name:"GUNBROKER API"},
     
      { name: "Visual Studio Code" },
      { name: "Postman" },
      { name: "Microsoft SQL Server" },
      { name: "Visual Studio" },
      { name: "Git" },
      { name: "GitHub" },

    ],
  }
];


// ======================= Projects =======================
export const projects = [
  {
    id: 0,
    title: "My Field Service – Backend CRM",
    description:
      "A .NET Core Web API backend for managing field operations. Includes modules for customers, jobs, service agreements, equipment tracking, reports, and payments.",
    image: yourBackendLogo,
    tags: ["C#", ".NET Core", "REST API", "EF Core", "SQL Server"],
    github: "https://github.com/manusharma832",
    webapp: ""
  },
  {
    id: 1,
    title: "Business Plan Writer",
    description:
      "Users can choose between starting from an idea or using a business model canvas. The platform guides them through key business planning components like Management, Customers, Communication, Cash Flow, and Risk Mitigation using a step-by-step form interface.",
    image: businessLogo,
    tags: ["C#", "ASP.NET MVC", "AJAX", "SQL Server"],
    github: "https://github.com/manusharma832",
    webapp: "https://business-plan-live.com"
  },
 {
  id: 2,
  title: "Dennis Shipping Management System",
  description:
    "This platform streamlines logistics and order management for delivery and shipping companies. It enables real-time order tracking, efficient sales management, and smooth reporting with minimal page reloads.",
  image: dennisshippingLogo,
  tags: ["C#", "ASP.NET MVC", "AJAX", "SQL Server"],
  github: "https://github.com/manusharma832",
  webapp: ""
}
];


// ======================= Upwork Experience =======================
export const upworkExperiences = [
  {
    id: 1,
    jobTitle: "Job Title 1",
    clientFeedback: "Client feedback 1",
    hoursWorked: 10,
  },
  {
    id: 2,
    jobTitle: "Job Title 2",
    clientFeedback: "Client feedback 2",
    hoursWorked: 20,
  }
];
