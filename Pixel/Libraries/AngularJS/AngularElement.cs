using System.Runtime.CompilerServices;
using jQueryApi;
using ng.auto;

namespace ng
{
    [Imported()]
    public class AngularElement : jQueryObject
    {
        public T Scope<T>() where T : IScope
        {
            return default(T);
        }

        public IInjectorService Injector()
        {
            return null;
        }
    }
}