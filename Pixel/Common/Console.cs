using System;
using System.Runtime.CompilerServices;

namespace Common
{
    [IgnoreNamespace]
    [Imported]
    [ScriptName("console")]
    public static class Console
    {
        public static void Log(object val)
        {
        }

        public static void Error(Exception val)
        {
        }

        public static void Log()
        {
        }

        [InlineCode("console.log({message})")]
        public static void WriteLine(string message)
        {
        }

        [InlineCode("console.time({message})")]
        public static void Time(string message)
        {
        }

        [InlineCode("console.timeEnd({message})")]
        public static void TimeEnd(string message)
        {
        }
    }
}