using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper.Execution;
using AutoMapper.Mappers;
using GrupsUp.Api.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace GrupsUp.Api
{

    public class FoodModel
    {

        public FoodModel()
        {

        }

        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public FoodCategoryModel Category { get; set; }

        [JsonProperty(ItemConverterType = typeof(StringEnumConverter))]
        public ISet<CookingMethodModel> CookingMethods { get; set; }

        public int CookingTime { get; set; } = 40;
        public int BaseTime { get; set; }
        public int TimePerGram { get; set; }
        public int Tempature { get; set; }
        public int PortionSize { get; set; }

    }
}
