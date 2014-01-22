using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_LoopControl : AST_Jump
    {
        [IntrinsicProperty]
        public AST_LabelRef Label { get; set; }
    }
}