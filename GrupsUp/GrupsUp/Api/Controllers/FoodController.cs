using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper.Execution;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace GrupsUp.Api.Controllers
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
            //TODO build management and data access etc Mock for now.
            var foods = new List<FoodModel>();
            foods.Add(new FoodModel()
            {
                Name = "Chicken", Category = FoodCategoryModel.Meat,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast}
            });

            foods.Add(new FoodModel()
            {
                Name = "Potatoes",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil, CookingMethodModel.Microwave }
            });

            foods.Add(new FoodModel()
            {
                Name = "Carrots",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil,
                    CookingMethodModel.Microwave, CookingMethodModel.Steam }
            });

            foods.Add(new FoodModel()
            {
                Name = "Peas",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil,
                    CookingMethodModel.Microwave, CookingMethodModel.Steam }
            });

            foods.Add(new FoodModel()
            {
                Name = "Broccoli",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil,
                    CookingMethodModel.Microwave, CookingMethodModel.Steam }
            });

            return Ok(foods);
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
