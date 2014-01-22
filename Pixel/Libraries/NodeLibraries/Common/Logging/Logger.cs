using System;
using NodeLibraries.NodeJS;

namespace NodeLibraries.Common.Logging
{
    public static class Logger
    {
        private static FS fs;
        private static string Key;

        static Logger()
        {
            fs = Global.Require<FS>("fs");
        }

        public static void Start(string key)
        {
            Console.WriteLine(key + " - " + Common.LongDate());
            Key = key + " - " + Common.LongDate() + ".txt";
            Log("Start: " + key, LogLevel.Information);
        }

        public static string Log(string item, LogLevel level)
        {
            item = string.Format("{0} - {1}", Common.ShortDate(), item);
            switch (level)
            {
                case LogLevel.Error:
                    Console.WriteLine(item);
                    break;
                case LogLevel.DebugInformation:
                    break;
                case LogLevel.Information:
                    break;
                case LogLevel.TransportInfo:
                    break;
                case LogLevel.DataInfo:
                    break;
                case LogLevel.KeepAlive:

                    return item;
            }
            fs.AppendFile("logs/" + Key, item + "\n", null, (error, outp) =>
                                                            {
                                                                if (error != null)
                                                                {
                                                                    Console.WriteLine(error.ToString());
                                                                    Console.WriteLine(outp);
                                                                }
                                                            });
            return item;
        }
    }
}