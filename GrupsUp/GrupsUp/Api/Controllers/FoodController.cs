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
                Description = "Roast chicken is great for a sunday lunch.",
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast},
                Image = "https://images.unsplash.com/photo-1456404823214-a69ef7a1fae5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68b07368f7d8b0bf94ddd11b81e53e12&auto=format&fit=crop&w=1350&q=80",
                BaseTime = 20* 60,
                TimePerGram = 1200/450,
                Tempature = 180,
                PortionSize = 120,

            });

            foods.Add(new FoodModel()
            {
                Name = "Potatoes",
                Category = FoodCategoryModel.Carbs,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil, CookingMethodModel.Microwave },
                Image = "https://images.unsplash.com/photo-1533384159656-84b8ae5ce5e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=255a81431ee1998226e0061c2199b0db&auto=format&fit=crop&w=634&q=80",
                BaseTime = 20 * 60,
                TimePerGram = 1200 / 450,
                Tempature = 180,
                PortionSize = 120,
            });

            foods.Add(new FoodModel()
            {
                Name = "Carrots",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil,
                    CookingMethodModel.Microwave, CookingMethodModel.Steam },
                Image = "https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8ee55b95594a18066e905183dd9f760&auto=format&fit=crop&w=1350&q=80",
                BaseTime = 30 *60,
                TimePerGram = 0,
                Tempature = 180,
                PortionSize = 60,
            });

            foods.Add(new FoodModel()
            {
                Name = "Peas",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil,
                    CookingMethodModel.Microwave, CookingMethodModel.Steam },
                Image = "https://images.unsplash.com/photo-1503444786070-ab39340977f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82801c8d212a5d096f763418dd74444f&auto=format&fit=crop&w=1950&q=80",
                BaseTime = 4 *60,
                TimePerGram = 0,
                Tempature = 100,
                PortionSize = 60,
            });

            foods.Add(new FoodModel()
            {
                Name = "Broccoli",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil,
                    CookingMethodModel.Microwave, CookingMethodModel.Steam },
                Image = "https://images.unsplash.com/photo-1506808547685-e2ba962ded60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd33fc6d316171dffb724ca209c06fc2&auto=format&fit=crop&w=675&q=80",
                BaseTime = 15*60,
                TimePerGram = 0,
                Tempature = 100,
                PortionSize = 60,
            });

            foods.Add(new FoodModel()
            {
                Name = "FastFood",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil,
                    CookingMethodModel.Microwave, CookingMethodModel.Steam },
                Image = "https://images.unsplash.com/photo-1506808547685-e2ba962ded60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd33fc6d316171dffb724ca209c06fc2&auto=format&fit=crop&w=675&q=80",
                BaseTime = 15 * 1,
                TimePerGram = 0,
                Tempature = 100,
                PortionSize = 60,
            });

            foods.Add(new FoodModel()
            {
                Name = "super FastFood ",
                Category = FoodCategoryModel.Vegetable,
                CookingMethods = new HashSet<CookingMethodModel>() { CookingMethodModel.OvenRoast, CookingMethodModel.Boil,
                    CookingMethodModel.Microwave, CookingMethodModel.Steam },
                Image = "https://images.unsplash.com/photo-1506808547685-e2ba962ded60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd33fc6d316171dffb724ca209c06fc2&auto=format&fit=crop&w=675&q=80",
                BaseTime = 5 * 1,
                TimePerGram = 0,
                Tempature = 100,
                PortionSize = 60,
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
