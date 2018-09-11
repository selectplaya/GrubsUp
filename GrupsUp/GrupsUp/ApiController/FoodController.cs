using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper.Execution;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace GrupsUp.ApiController
{
    [Route("api/foods")]
    public class FoodController : Controller
    {


        public FoodController()
        {

        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [FormatFilter]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("You Must be hungry.");
        }

        /// <summary>
        /// Describe the food model object
        /// </summary>
        /// <returns></returns>
        /// <remarks>
        /// Describes Stuff
        /// </remarks>
        [HttpGet]
        [Route("describe")]

        public IActionResult Describe()
        {
            return Ok("HelloWorld");
        }
    }
}
