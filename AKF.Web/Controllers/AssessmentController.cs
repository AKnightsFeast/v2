﻿using System;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

//using PdfSharp.Pdf;
//using MigraDoc.Rendering;
//using MigraDoc.DocumentObjectModel;

using AKF.Common.Models;
using AKF.Database.Interfaces;
//using site.Models.Enums;

namespace AKF.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class AssessmentController : ControllerBase
    {
        IDatabaseContext _dbContext { get; set; }

        public AssessmentController(IDatabaseContext databaseContext)
        {
            _dbContext = databaseContext;
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<JsonResult> Index(Assessment form)
        {
            try
            {
                    //form.Contact.IsContact = true;
                    //form.People = new List<Person>(){ form.Contact };

                    using (_dbContext)
                    {
                        await _dbContext.AddAssessment(form);
                    }

                    //Email.Send("New Assessment", "system@aknightsfeast.com", "A new assessment form has been submitted!");

                    return new JsonResult(new {
                        Success = true,
                        Modal = new {
                            Title = "Thanks!",
                            Message = "<p>Your assessment has been submitted successfully!<p><p>Once Chef Laura has reviewed it she will get back to you shortly!</p>"
                        }
                    });

                // return new JsonResult(new {
                //     Success = false,
                //     Modal = new {
                //         Title = "Oh No!",
                //         Message = "<p>Your assessment was invalid.</p><p>Please fix the errors causing this and resubmit.</p>"
                //     }
                // });
            }
            catch (Exception e)
            {
                return new JsonResult(new
                {
                    Success = false,
                    Modal = new
                    {
                        Title = "Oh No!",
                        Message = "<p>There was an error submitting your assessment.</p><p>Please try resubmitting at a later time.</p>"
                    }
                });
            }
        }

        [HttpGet]
        [Authorize]
        [ResponseCache(CacheProfileName = "No-Cache")]
        public async Task<IEnumerable<Assessment>> ViewAll()
        {
            using (_dbContext)
            {
                return await _dbContext.GetAssessments();
            }
        }

        [HttpGet]
        [Authorize]
        [ResponseCache(CacheProfileName = "No-Cache")]
        public async Task<Assessment> Index(long id)
        {
            using (_dbContext)
            {
                return await _dbContext.GetAssessment(id);
            }
        }

        //[Authorize]
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //[Authorize]
        //[ResponseCache(CacheProfileName = "No-Cache")]
        //public IActionResult Print(int id)
        //{
        //    var pdf = new Document();
        //    var pdfStream = new MemoryStream();
        //    var pdfRenderer = new PdfDocumentRenderer() { Document = pdf };

        //    var assessment = new Assessment();

        //    var fileName = Guid.NewGuid().ToString() + ".pdf";

        //    using (var db = new AssessmentContext())
        //    {
        //        assessment = db.Assessments.Include("People").Include("Pets").FirstOrDefault(a => a.AID == id);

        //        if (assessment != null)
        //        {
        //            var firstPerson = assessment.People.ToList()[0];
        //            fileName = string.Format("Assessment.{0}.{1}.{2}.pdf",
        //                                      assessment.CreationDate.ToString("yyyyMMdd"),
        //                                      firstPerson.LastName,
        //                                      firstPerson.FirstName);
        //        }
        //    }

        //    if (assessment == null)
        //    {
        //        var section = pdf.AddSection();
        //        section.AddParagraph("This assessment could not be retrieved.");
        //        section.AddParagraph("Please contact the system administrator if there is an issue with this result.");
        //    }
        //    else
        //    {
        //        var address = assessment.CookingAddress;
        //        var textFrame = pdf.AddSection().AddTextFrame();
        //        textFrame.AddParagraph("Address");
        //        textFrame.AddParagraph(address.Address1);
        //        if (!string.IsNullOrEmpty(address.Address2)) textFrame.AddParagraph(address.Address2);
        //        textFrame.AddParagraph(string.Format("{0}, {1} {2}", address.City, address.State, address.ZipCode));
        //    }

        //    pdfRenderer.RenderDocument();
        //    pdfRenderer.Save(pdfStream, true);

        //    return new ContentDispositionFileResult(pdfStream.ToArray(), "application/pdf", new ContentDisposition() { Inline = true, FileName = fileName });
        //}
    }
}