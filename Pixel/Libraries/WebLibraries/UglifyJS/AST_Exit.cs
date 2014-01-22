using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Exit : AST_Jump
    {
        [IntrinsicProperty]
        public AST_Node Value { get; set; }
    }
}