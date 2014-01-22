using System.Runtime.CompilerServices;
using WebLibraries.Common;

namespace WebLibraries.UglifyJS
{
    [Imported]
    public class UglifyJS
    {
        public AST_Toplevel Parse(string code)
        {
            return null;
        }

        [InlineCode("UglifyJS")]
        public static UglifyJS Instance()
        {
            return null;
        }
    }
}