using System;

namespace WebLibraries.UglifyJS
{
    public delegate bool TreeWalkerDelegate(AST_Node node, Action descend);
}