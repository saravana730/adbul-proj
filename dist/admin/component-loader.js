import { ComponentLoader } from 'adminjs';
const componentLoader = new ComponentLoader();
const Components = {
    Dashboard: componentLoader.add('Dashboard', '../components/dashboard'),
    Home: componentLoader.add('Home', '../components/home'),
    SideBar: componentLoader.override('SidebarResourceSection', '../components/customSidebar'),
    Login: componentLoader.override('Login', '../components/login')
};
export { componentLoader, Components };
