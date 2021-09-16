using System;
using System.Text.Json;
using System.Text.Json.Serialization;

using site.Extensions;

namespace site.Models.Converters
{
    public class JSONEnumConverter<T> : JsonConverter<T> where T : struct, Enum {
        public JSONEnumConverter() {}

        public override T Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) {
            JsonTokenType token = reader.TokenType;

            if (token == JsonTokenType.String)
            {
                return default(T);
            }

            if (token == JsonTokenType.StartArray)
            {
                return default(T);
                /*
                string[] values;
                //Enum propertyValue = null;

                if ((values = reader. as string[]) == null) return null;

                //foreach (string value in values)
                //{
                //    var enumValue = Enum.Parse(typeof(Type), value, true) as Enum;
                //    enumValue = (propertyValue == null) ? enumValue : propertyValue | enumValue;
                //}

                //return enumValue;
                return Enum.Parse(typeof(Type), reader.Value.ToString());
                */
            }

            return default(T);
        }

        public override bool CanConvert(Type objectType)
        {
            return true;
        }

        public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
        {
            throw new NotImplementedException();
        }
    }
}