using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Call : AST_Node
    {
        public AST_Node Expression { get; set; }
        public AST_Node[] Args { get; set; }
    }
}