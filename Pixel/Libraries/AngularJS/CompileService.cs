using System;
using jQueryApi;

namespace ng
{
    public delegate Func<object, AngularElement> CompileService(jQueryObject content);
}