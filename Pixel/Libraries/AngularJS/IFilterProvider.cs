using System.Runtime.CompilerServices;

namespace ng
{
    [Imported]
    public interface IFilterProvider : IServiceProvider
    {
#if TODO
        register(name: string, filterFactory: Function): IServiceProvider;
#endif
    }
}