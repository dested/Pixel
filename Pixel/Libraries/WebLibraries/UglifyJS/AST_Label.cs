using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Label : AST_Symbol
    {
        [IntrinsicProperty]
        public AST_LabelRef[] References { get; set; }
    }
}