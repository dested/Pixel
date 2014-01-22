using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_String : AST_Constant
    {
        [IntrinsicProperty]
        public string Value { get; set; }
    }
}