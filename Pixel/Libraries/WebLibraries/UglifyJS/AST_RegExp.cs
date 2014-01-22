using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class AST_RegExp : AST_Constant
    {
        [IntrinsicProperty]
        public Regex Value { get; set; }
    }
}