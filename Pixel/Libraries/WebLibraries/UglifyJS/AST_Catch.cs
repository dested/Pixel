using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Catch : AST_Block
    {
        [IntrinsicProperty]
        public AST_SymbolCatch Argname { get; set; }
    }
}