import { ComponentLoader } from 'adminjs';
import path from 'path';

const componentLoader = new ComponentLoader();
const Components = {
    Dashboard: componentLoader.add('Dashboard',  '../components/dashboard'),
    Home: componentLoader.add('Home',  '../components/home'),
    SideBar: componentLoader.override('SidebarResourceSection','../components/customSidebar'),

};

export { componentLoader, Components };
