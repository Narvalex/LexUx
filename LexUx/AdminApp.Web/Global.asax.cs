﻿using AdminApp.Server.App_Start;
using System;
using System.Web.Http;

namespace AdminApp.Web
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}