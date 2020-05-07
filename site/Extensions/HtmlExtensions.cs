﻿using System;
using System.Text;

using System.Linq;
using System.Linq.Expressions;

using Microsoft.AspNetCore.Html;

using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

using site.Attributes;

namespace site.Extensions
{
    public static class HtmlExtensions
    {
        /// <summary>
        /// Creates a checkbox list from enumeration values
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <typeparam name="TEnum"></typeparam>
        /// <param name="htmlHelper"></param>
        /// <param name="expression"></param>
        /// <param name="itemsPerCol"></param>
        /// <returns></returns>
        public static HtmlString CheckBoxListForEnum<T, TEnum>(this IHtmlHelper<T> htmlHelper, Expression<Func<T, TEnum>> expression, int itemsPerCol) where TEnum : struct, IConvertible
        {
            if (!typeof(TEnum).IsEnum) throw new ArgumentException("this helper can only be used with enums");

            var output = new StringBuilder();
            var model = htmlHelper.ViewData.Model;

            if (itemsPerCol > 0)
            {
                var enumItems = Enum.GetValues(typeof(TEnum)); // The values in the enum of type TEnum
                var totalEnumItems = enumItems.Length;
                var onePerCol = itemsPerCol == 1; // Are we only showing one item per column
                StringBuilder checkboxColumn = (onePerCol) ? null : new StringBuilder();

                // Access the specific enumeration property from the model to get its value
                Enum enumProp = (model != null) ? expression.Compile().Invoke(model) as Enum : null;

                var itemsInCol = 0;

                // Go through the list of TEnum items
                for (var i = totalEnumItems; i > 0; i--)
                {
                    Enum item = enumItems.GetValue(totalEnumItems - i) as Enum;

                    var display = item.GetType().GetField(item.ToString())
                        .GetCustomAttributes(typeof(EnumDisplayAttribute), true).FirstOrDefault() as EnumDisplayAttribute;

                    if (display != null && !display.IsVisible) continue;

                    var name = expression.Body.ToString().Split('.').Last();

                    var checkbox = new TagBuilder("input");
                    checkbox.Attributes["id"] = name;
                    checkbox.Attributes["name"] = name;
                    checkbox.Attributes["type"] = "checkbox";
                    checkbox.Attributes["value"] = item.ToString();

                    // If the TEnum item is selected make its checkbox checked
                    if (enumProp != null && enumProp.HasFlag(item)) checkbox.Attributes["checked"] = "checked";

                    var label = new TagBuilder("label");

                    // If the checkbox has a special EnumDisplay attribute use the value store in the
                    // attribute's "Label" property
                    label.InnerHtml.AppendHtml(checkbox.ToString() + " " + (display != null ? display.Label : item.ToString()));

                    var div = new TagBuilder("div");
                    div.InnerHtml.AppendHtml(label.ToString());

                    var checkboxDiv = div.ToString();

                    if (onePerCol)
                    {
                        output.AppendLine(checkboxDiv); // Add the checkbox individually
                    }
                    else
                    {
                        checkboxColumn.AppendLine(checkboxDiv); // Add the checkbox to the column

                        itemsInCol++;

                        if (itemsInCol == itemsPerCol || i == 1)
                        {
                            var colDiv = new TagBuilder("div");
                            colDiv.InnerHtml.AppendHtml(checkboxColumn.ToString());

                            output.AppendLine(colDiv.ToString());
                            checkboxColumn.Clear();
                            itemsInCol = 0;
                        }
                    }
                }

                if (checkboxColumn != null && checkboxColumn.Length > 0)
                {
                    var lastColDiv = new TagBuilder("div");
                    lastColDiv.InnerHtml.AppendHtml(checkboxColumn.ToString());

                    output.AppendLine(lastColDiv.ToString());
                }
            }

            return new HtmlString(output.ToString());
        }
    }
}