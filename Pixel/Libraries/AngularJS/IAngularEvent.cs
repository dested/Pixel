using System.Runtime.CompilerServices;

namespace ng
{
    [Imported]
    public interface IAngularEvent
    {
#if TODO
        targetScope: IScope;
        currentScope: IScope;
        name: string;        
        preventDefault: Function;
        defaultPrevented: bool;

        // Available only events that were $emit-ted
        stopPropagation?: Function;
#endif
    }
}