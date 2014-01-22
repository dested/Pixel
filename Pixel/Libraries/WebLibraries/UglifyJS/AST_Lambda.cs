using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Lambda : AST_Scope
    {
        [IntrinsicProperty]
        public AST_SymbolDeclaration Name { get; set; }

        [IntrinsicProperty]
        public AST_SymbolFunarg[] Argnames { get; set; }

        [IntrinsicProperty]
        public bool Uses_arguments { get; set; }
    }
}