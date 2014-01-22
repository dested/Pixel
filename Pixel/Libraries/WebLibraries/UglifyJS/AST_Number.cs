using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_Number : AST_Constant
    {
        [IntrinsicProperty]
        public float Value { get; set; }
    }
}