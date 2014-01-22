using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Directive : AST_Statement
    {
        [IntrinsicProperty]
        public string Value { get; set; }

        [IntrinsicProperty]
        public AST_Scope Scope { get; set; }
    }
}