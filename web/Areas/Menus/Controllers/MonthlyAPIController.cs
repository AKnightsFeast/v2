using System;
using System.IO;
using System.Globalization;
using System.Collections.Generic;

using System.Web;
using System.Web.Http;

using v2.models;

namespace v2.web.Areas.Menus.Controllers
{
    public class MonthlyAPIController : ApiController
    {
        static SortedDictionary<int, List<MonthlyMenuLink>> MonthlyMenus;

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        private SortedDictionary<int, List<MonthlyMenuLink>> GetMonthlyMenus()
        {
            if (MonthlyMenus == null)
            {
                MonthlyMenus = new SortedDictionary<int, List<MonthlyMenuLink>>(new DescendingComparer<int>());

                foreach (var file in Directory.GetFiles(HttpContext.Current.Server.MapPath("~/Content/media/menus")))
                {
                    var fileName = Path.GetFileName(file);
                    var fileYear = int.Parse(fileName.Substring(0, 4));
                    var fileMonth = int.Parse(fileName.Substring(4, 2));

                    if (!MonthlyMenus.ContainsKey(fileYear)) MonthlyMenus.Add(fileYear, new List<MonthlyMenuLink>());

                    MonthlyMenus[fileYear].Add(new MonthlyMenuLink()
                    {
                        FileName = fileName,
                        Text = new DateTime(fileYear, fileMonth, 1).ToString("MMM", CultureInfo.InvariantCulture)
                    });
                }

                foreach (var link in MonthlyMenus.Values)
                {
                    link.Sort();
                }
            }

            return MonthlyMenus;
        }

        class DescendingComparer<T> : IComparer<T> where T : IComparable<T>
        {
            public int Compare(T x, T y)
            {
                return y.CompareTo(x);
            }
        }
    }
}