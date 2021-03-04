using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace site.Models.Binders
{
    IModelBinder _baseBinder;

    public class EnumPropertyBinder<T> : IModelBinder where T : struct
    {
        public EnumPropertyBinder()
        {
            _baseBinder = SimpleTypeModelBinder()
        }
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            if (bindingContext == null) throw new ArgumentNullException(nameof(bindingContext));

            var value = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);

            if (value != ValueProviderResult.None)
            {

                return Task.CompletedTask;
            }

            return baseBinder
        }
    }
/*
    public class EnumModelBinder<T> : DefaultModelBinder where T : struct, IConvertible
    {
        public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            var value = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);

            if (value != null)
            {
                var rawValues = value.RawValue as string[];

                if (rawValues != null)
                {
                    T result;
                    if (Enum.TryParse<T>(string.Join(",", rawValues), out result)) return result;
                }
            }

            return base.BindModel(controllerContext, bindingContext);
        }
    }
*/
}