import React, { lazy } from 'react';


/* Page component lazy import */
const HomePage = lazy(()=>import('../Views/user/HomePage'));
const ContactPage = lazy(()=>import('../Views/user/ContactPage'));
const ServicePage = lazy(()=>import('../Views/user/ServicePage'));
const AboutMePage = lazy(()=>import('../Views/user/AboutMePage'));
const AdminLoginPage = lazy(()=>import('../Views/admin/Admin-Loggin.js/AdminLoginPage'));
const WorkPage = lazy(()=>import('../Views/user/WorkPage'));
const BlogPage = lazy(()=>import('../Views/user/BlogPage'));
const NotFoundPage = lazy(()=>import('../Views/user/Not-Found-Page/NotFoundPage'))

/* Admin */
const AdminDashboard = lazy(()=>import('../Views/admin/Admin-Dashboard/AdminDashboard'))
const AdminAccountSetting = lazy(()=>import('../Views/admin/Admin-Account-Setting/AdminAccountSetting'))
const AdminBlog = lazy(()=>import('../Views/admin/Admin-Blog/AdminBlog'))
const AdminPortfolio = lazy(()=>import('../Views/admin/Admin-Portfolio/AdminPortfolio'))
const AdminService = lazy(()=>import('../Views/admin/Admin-Services/AdminService'))
const AdminSkill = lazy(()=>import('../Views/admin/Admin-Skills/AdminSkill'))
const AdminUpload = lazy(()=>import('../Views/admin/Admin-Upload/AdminUpload'))


const Routes = [
    {
        name:"home",
        path:"/",
        exact:true,
        component:<HomePage/>,
        private: false
    },
    {
        name:"about-me",
        path:"/about-me",
        exact:false,
        component:<AboutMePage/>,
        private: false
  
    },
    {
        name:"portfolio",
        path:"/work",
        exact:false,
        component:<WorkPage/>,
        private: false
    },
    {
        name:"blog",
        path:"/blog",
        exact:false,
        component:<BlogPage/>,
        private: false
    },
    {
        name:"service",
        path:"/service",
        exact:false,
        component:<ServicePage/>,
        private: false
    },
    {
        name:"contact",
        path:"/contact",
        exact:false,
        component:<ContactPage/>,
        private: false
    },
    {
      name:"login",
      path:"/login",
      exact:true,
      component:<AdminLoginPage/>,
      private: false
    },
    {
      name:"dashboard",
      path:"/admin",
      exact:false,
      component:<AdminDashboard/>,
      private: true
    },
    {
      name:"admin-setting",
      path:"/admin-setting",
      exact:false,
      component:<AdminAccountSetting/>,
      private: true
    },
    {
      name:"admin-work",
      path:"/admin-work",
      exact:false,
      component:<AdminPortfolio/>,
      private: true
    },
    {
      name:"admin-blog",
      path:"/admin-blog",
      exact:false,
      component:<AdminBlog/>,
      private: true
    },
    {
      name:"admin-skill",
      path:"/admin-skill",
      exact:false,
      component:<AdminSkill/>,
      private: true
    },
    {
      name:"admin-service",
      path:"/admin-service",
      exact:false,
      component:<AdminService/>,
      private: true
    },
    {
      name:"admin-upload",
      path:"/admin-upload",
      exact:false,
      component:<AdminUpload/>,
      private: true
    },
    {
      name:"not found",
      path:"/not-found",
      exact:false,
      component:<NotFoundPage/>,
      private: false
    }
  
  ]
export default Routes