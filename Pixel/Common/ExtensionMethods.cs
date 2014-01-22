using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace Common
{
    public static class ExtensionMethods
    {
//        public const string HARDLOCATION = "/usr/local/src/new/";
        [InlineCode("{script}")]
        public static dynamic me(this object script) //::dynamic okay
        {
            return script;
        }

        public static string GoodMessage(this Exception ex)
        {
            return ex.Message + "  " + ex.InnerException;
        }

        public static string ToPx(this double num)
        {
            return num + "px";
        }

        public static string ToPx(this int num)
        {
            return num + "px";
        }

        [InlineCode("debugger")]
        public static void debugger()
        {
        }

        [InlineCode("delete {m}")]
        public static void Delete(this object m)
        {
        }

        [InlineCode("eval({script})")]
        public static dynamic eval(this object script) //::dynamic okay
        {
            return null;
        }

        [InlineCode("{o}")]
        [InstanceMethodOnFirstArgument]
        public static T Cast<T>(this object o)
        {
            return default(T);
        }

        [InlineCode("{o}")]
        [InstanceMethodOnFirstArgument]
        public static T CastDynamic<T>(dynamic o)
        {
            return default(T);
        }

        public static T CleanUp<T>(T o)
        {
            return Json.Parse<T>(Json.Stringify(o, Help.Sanitize));
        }

        public static bool SameAs<T, T2>(this JsDictionary<T, T2> left, JsDictionary<T, T2> right)
        {
            foreach (var v in left)
            {
                if (!Equals(right[v.Key], v.Value))
                {
                    return false;
                }
            }
            foreach (var v in right)
            {
                if (!Equals(left[v.Key], v.Value))
                {
                    return false;
                }
            }
            return true;
        }
    }
}