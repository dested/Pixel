using System;
using System.Collections.Generic;

namespace Common
{
    public static class EnumerableExtensions
    {
        public static int Count<T>(this List<T> enumerable, Func<T, bool> counter)
        {
            int count = 0;
            foreach (var v in enumerable)
            {
                if (counter(v))
                {
                    count++;
                }
            }
            return count;
        }

        public static List<T> Where<T>(this List<T> enumerable, Func<T, bool> counter)
        {
            List<T> ts = new List<T>();

            foreach (var v in enumerable)
            {
                if (counter(v))
                {
                    ts.Add(v);
                }
            }
            return ts;
        }
        public static int Count<T>(this T[] enumerable, Func<T, bool> counter)
        {
            int count = 0;
            foreach (var v in enumerable)
            {
                if (counter(v))
                {
                    count++;
                }
            }
            return count;
        }

        public static List<T> Where<T>(this T[] enumerable, Func<T, bool> counter)
        {
            List<T> ts = new List<T>();

            foreach (var v in enumerable)
            {
                if (counter(v))
                {
                    ts.Add(v);
                }
            }
            return ts;
        }


        public static T First<T>(this T[] elements, Func<T, bool> conditional)
        {
            foreach (var element in elements)
            {
                if (conditional(element))
                {
                    return element;
                }
            }
            return default(T);
        }

        public static T2[] Select<T, T2>(this T[] elements, Func<T, T2> conditional)
        {
            var ts = new List<T2>();

            foreach (var element in elements)
            {
                ts.Add(conditional(element));
            }
            return ts.ToArray();
        }


        public static T First<T>(this List<T> elements, Func<T, bool> conditional)
        {
            foreach (var element in elements)
            {
                if (conditional(element))
                {
                    return element;
                }
            }
            return default(T);
        }

        public static List<T2> Select<T, T2>(this List<T> elements, Func<T, T2> conditional)
        {
            var ts = new List<T2>();

            foreach (var element in elements)
            {
                ts.Add(conditional(element));
            }
            return ts;
        }

    }
}