using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Net.Mime;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;

namespace site.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MenusController: ControllerBase
    {
        IWebHostEnvironment _env;

        public MenusController(IWebHostEnvironment env)
        {
            _env = env;
        }

        [HttpGet]
        [Route("months")]
        public ActionResult<IEnumerable<int>> GetMenuMonths(int year)
        {
            var months = new List<int>();

            Directory.GetFiles(Path.Combine(_env.ContentRootPath, @"Client\public\assets\menus"))
                .Where(path => Regex.Match(path, $"{year}(?<month>0[1-9]|1[0-2]).*.pdf").Success)
                .ToList().ForEach(fileName => {
                    months.Add(Convert.ToInt32(Path.GetFileName(fileName).Substring(4, 2)));
                });

            return Ok(months.ToArray());
        }
    }
}