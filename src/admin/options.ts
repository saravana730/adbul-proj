import { AdminJSOptions } from 'adminjs';

import {componentLoader, Components} from './component-loader.js';



// const admin = new AdminJS({
//   dashboard: {
//     component: Components.Dashboard,
//   },
//   componentLoader
// })
const options: AdminJSOptions = {
  branding: {
    companyName: '',
    logo: false, // Remove the logo from the sidebar

  },
  componentLoader,
  dashboard:{
    component:Components.Dashboard
  },
  
  rootPath: '/admin',
  resources: [],


  pages: {
    home: {
      handler: async (req, res, context) => {
        // Define any backend logic for the custom page
        res.json({
          message: 'This is a custom API response from the custom page!',
        });
      },
      component: Components.Home
    },
  },
  databases: [],
  
};






export default options;
