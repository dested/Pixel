using System.Runtime.CompilerServices;

namespace NodeLibraries.Common.Logging
{
    [NamedValues]
    public enum LogLevel
    {
        Error,
        DebugInformation,
        Information,
        TransportInfo,
        DataInfo,
        KeepAlive
    }
}