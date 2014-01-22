using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_SymbolDeclaration : AST_Symbol
    {
        [IntrinsicProperty]
        public AST_Node[] Init { get; set; }
    }
}