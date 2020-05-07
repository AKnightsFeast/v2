using System;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;

namespace site.Attributes
{
    [AttributeUsage(AttributeTargets.Method, Inherited = true, AllowMultiple = false)]
    public class AjaxOnlyAttribute: Attribute, IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            // If this is not an AJAX request then send the requestor to the no access error page
            if (!filterContext.HttpContext.Request.IsAjaxRequest())
                filterContext.Result = new RedirectResult("~/Error/NoAccess");
        }

        public void OnActionExecuted(ActionExecutedContext filterContext) { }
    }

    static class HttpRequestExtensions
    {
        private const string RequestedWithHeader = "X-Requested-With";
        private const string XmlHttpRequest = "XMLHttpRequest";

        public static bool IsAjaxRequest(this HttpRequest request)
        {
            if (request == null) throw new ArgumentNullException("request");

            if (request.Headers != null) return request.Headers[RequestedWithHeader] == XmlHttpRequest;

            return false;
        }
    }
}