using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace WebLibraries.CodeMirror
{
    [IgnoreNamespace]
    [Imported]
    [Serializable]
    public class CodeMirrorLine
    {
        [ScriptName("markerText")]
        public bool MarkerText { get; set; }

        public string Markers { get; set; }
        public JsDictionary<string, string> GutterMarkers { get; set; }
    }
}