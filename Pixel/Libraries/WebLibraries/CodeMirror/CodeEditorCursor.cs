using System;
using System.Runtime.CompilerServices;

namespace WebLibraries.CodeMirror
{
    [IgnoreNamespace]
    [Imported]
    [Serializable]
    public class CodeEditorCursor
    {
        public int Line { get; set; }

        [ScriptName("ch")]
        public int Character { get; set; }
    }
}