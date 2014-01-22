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
    }
}