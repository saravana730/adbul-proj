import { componentLoader, Components } from './component-loader.js';
const options = {
    branding: {
        companyName: '',
        logo: false,
    },
    componentLoader,
    dashboard: {
        component: Components.Dashboard
    },
    rootPath: '/admin',
    resources: [],
    pages: {
        home: {
            handler: async (req, res, context) => {
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
