using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SchoolsDocile.Controllers
{
    public class HomeController : Controller
    {

        MyJSDBEntities myJSDBEntities = new MyJSDBEntities(); // Know your entity 
        // GET: Home
        public ActionResult Index()
        {
           
            var MyList = myJSDBEntities.SchoolsDeciles.ToList();
            return View(MyList); // Pass this entity to the view
        }

        public ActionResult Validate()
        {
            return View();
        }

        public ActionResult Delete(int id)
        {

            Dinner dinner = dinnerRepository.GetDinner(id);

            if (dinner == null)
                return View("NotFound");
            else
                return View(dinner);
        }
    }
}