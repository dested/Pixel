(function() {
	'use strict';
	var $asm = {};
	global.Common = global.Common || {};
	ss.initAssembly($asm, 'Common');
	////////////////////////////////////////////////////////////////////////////////
	// Common.Constants
	var $Common_Constants = function() {
	};
	$Common_Constants.__typeName = 'Common.Constants';
	global.Common.Constants = $Common_Constants;
	////////////////////////////////////////////////////////////////////////////////
	// Common.DelegateOrValue
	var $Common_DelegateOrValue$1 = function(T) {
		var $type = function(d) {
			this.isValue = false;
			this.$method = null;
			this.$oldValue = ss.getDefaultValue(T);
			this.$value = ss.getDefaultValue(T);
			this.$1$StaticValueChangesField = null;
			this.$method = d;
			this.isValue = false;
			this.$oldValue = this.$method();
		};
		$type.$ctor1 = function(d) {
			this.isValue = false;
			this.$method = null;
			this.$oldValue = ss.getDefaultValue(T);
			this.$value = ss.getDefaultValue(T);
			this.$1$StaticValueChangesField = null;
			this.$value = d;
			this.isValue = true;
		};
		$type.op_Implicit$2 = function(d) {
			return new $type.$ctor1(d);
		};
		$type.op_Implicit$1 = function(d) {
			return new $type(d);
		};
		$type.op_Implicit = function(d) {
			return d.$evaluate();
		};
		ss.registerGenericClassInstance($type, $Common_DelegateOrValue$1, [T], {
			get_staticValueChanges: function() {
				return this.$1$StaticValueChangesField;
			},
			set_staticValueChanges: function(value) {
				this.$1$StaticValueChangesField = value;
			},
			$evaluate: function() {
				if (this.isValue === true) {
					return this.$value;
				}
				else if (this.isValue === false) {
					var val = this.$method();
					if (val !== this.$oldValue) {
						this.get_staticValueChanges()(val);
					}
					this.$oldValue = val;
					return val;
				}
				return ss.getDefaultValue(T);
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		$type.$ctor1.prototype = $type.prototype;
		return $type;
	};
	$Common_DelegateOrValue$1.__typeName = 'Common.DelegateOrValue$1';
	ss.initGenericClass($Common_DelegateOrValue$1, $asm, 1);
	global.Common.DelegateOrValue$1 = $Common_DelegateOrValue$1;
	////////////////////////////////////////////////////////////////////////////////
	// Common.EnumerableExtensions
	var $Common_EnumerableExtensions = function() {
	};
	$Common_EnumerableExtensions.__typeName = 'Common.EnumerableExtensions';
	$Common_EnumerableExtensions.count = function(T) {
		return function(enumerable, counter) {
			var count = 0;
			for (var $t1 = 0; $t1 < enumerable.length; $t1++) {
				var v = enumerable[$t1];
				if (counter(v)) {
					count++;
				}
			}
			return count;
		};
	};
	$Common_EnumerableExtensions.where = function(T) {
		return function(enumerable, counter) {
			var ts = [];
			for (var $t1 = 0; $t1 < enumerable.length; $t1++) {
				var v = enumerable[$t1];
				if (counter(v)) {
					ss.add(ts, v);
				}
			}
			return ts;
		};
	};
	$Common_EnumerableExtensions.count$1 = function(T) {
		return function(enumerable, counter) {
			var count = 0;
			for (var $t1 = 0; $t1 < enumerable.length; $t1++) {
				var v = enumerable[$t1];
				if (counter(v)) {
					count++;
				}
			}
			return count;
		};
	};
	$Common_EnumerableExtensions.where$1 = function(T) {
		return function(enumerable, counter) {
			var ts = [];
			for (var $t1 = 0; $t1 < enumerable.length; $t1++) {
				var v = enumerable[$t1];
				if (counter(v)) {
					ss.add(ts, v);
				}
			}
			return ts;
		};
	};
	$Common_EnumerableExtensions.first$1 = function(T) {
		return function(elements, conditional) {
			for (var $t1 = 0; $t1 < elements.length; $t1++) {
				var element = elements[$t1];
				if (conditional(element)) {
					return element;
				}
			}
			return ss.getDefaultValue(T);
		};
	};
	$Common_EnumerableExtensions.select$1 = function(T, T2) {
		return function(elements, conditional) {
			var ts = [];
			for (var $t1 = 0; $t1 < elements.length; $t1++) {
				var element = elements[$t1];
				ss.add(ts, conditional(element));
			}
			return Array.prototype.slice.call(ts);
		};
	};
	$Common_EnumerableExtensions.first = function(T) {
		return function(elements, conditional) {
			for (var $t1 = 0; $t1 < elements.length; $t1++) {
				var element = elements[$t1];
				if (conditional(element)) {
					return element;
				}
			}
			return ss.getDefaultValue(T);
		};
	};
	$Common_EnumerableExtensions.select = function(T, T2) {
		return function(elements, conditional) {
			var ts = [];
			for (var $t1 = 0; $t1 < elements.length; $t1++) {
				var element = elements[$t1];
				ss.add(ts, conditional(element));
			}
			return ts;
		};
	};
	global.Common.EnumerableExtensions = $Common_EnumerableExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// Common.ExtensionMethods
	var $Common_ExtensionMethods = function() {
	};
	$Common_ExtensionMethods.__typeName = 'Common.ExtensionMethods';
	$Common_ExtensionMethods.goodMessage = function(ex) {
		return ex.get_message() + '  ' + ex.get_innerException();
	};
	$Common_ExtensionMethods.toPx = function(num) {
		return num + 'px';
	};
	$Common_ExtensionMethods.toPx$1 = function(num) {
		return num + 'px';
	};
	$Common_ExtensionMethods.cleanUp = function(T) {
		return function(o) {
			return JSON.parse(JSON.stringify(o, $Common_Help.sanitize));
		};
	};
	$Common_ExtensionMethods.sameAs = function(T, T2) {
		return function(left, right) {
			var $t1 = new ss.ObjectEnumerator(left);
			try {
				while ($t1.moveNext()) {
					var v = $t1.current();
					if (!ss.staticEquals(right[v.key], v.value)) {
						return false;
					}
				}
			}
			finally {
				$t1.dispose();
			}
			var $t2 = new ss.ObjectEnumerator(right);
			try {
				while ($t2.moveNext()) {
					var v1 = $t2.current();
					if (!ss.staticEquals(left[v1.key], v1.value)) {
						return false;
					}
				}
			}
			finally {
				$t2.dispose();
			}
			return true;
		};
	};
	global.Common.ExtensionMethods = $Common_ExtensionMethods;
	////////////////////////////////////////////////////////////////////////////////
	// Common.Help
	var $Common_Help = function() {
	};
	$Common_Help.__typeName = 'Common.Help';
	$Common_Help.cleanUp = function(T) {
		return function(o) {
			return JSON.parse(JSON.stringify(o, $Common_Help.sanitize));
		};
	};
	$Common_Help.sanitize = function(name, value) {
		if (typeof(value) == 'function') {
			return null;
		}
		if ((name.indexOf(String.fromCharCode(95)) !== 0 || name === '_id') && name.toLowerCase() !== 'socket' && name.toLowerCase() !== 'fiber' && name.toLowerCase() !== 'debuggingsocket') {
			return value;
		}
		return null;
	};
	global.Common.Help = $Common_Help;
	////////////////////////////////////////////////////////////////////////////////
	// Common.IntPoint
	var $Common_IntPoint = function(x, y) {
		this.x = 0;
		this.y = 0;
		this.x = x;
		this.y = y;
	};
	$Common_IntPoint.__typeName = 'Common.IntPoint';
	global.Common.IntPoint = $Common_IntPoint;
	////////////////////////////////////////////////////////////////////////////////
	// Common.Number
	var $Common_Number = function(s) {
		this.$value = null;
		this.$value = s.toString();
	};
	$Common_Number.__typeName = 'Common.Number';
	$Common_Number.$ctor1 = function(s) {
		this.$value = null;
		this.$value = s;
	};
	$Common_Number.op_Implicit = function(d) {
		return parseFloat(d.$value);
	};
	$Common_Number.op_Implicit$3 = function(d) {
		return new $Common_Number.$ctor1(d);
	};
	$Common_Number.op_Implicit$2 = function(d) {
		return new $Common_Number(d);
	};
	$Common_Number.op_Implicit$1 = function(d) {
		return ((d.$value.indexOf('%') < 0) ? (d.$value + 'px') : d.$value);
	};
	global.Common.Number = $Common_Number;
	////////////////////////////////////////////////////////////////////////////////
	// Common.Point
	var $Common_Point = function(x, y) {
		this.x = 0;
		this.y = 0;
		this.x = x;
		this.y = y;
	};
	$Common_Point.__typeName = 'Common.Point';
	global.Common.Point = $Common_Point;
	////////////////////////////////////////////////////////////////////////////////
	// Common.Size
	var $Common_Size = function() {
	};
	$Common_Size.__typeName = 'Common.Size';
	$Common_Size.createInstance = function() {
		return $Common_Size.$ctor();
	};
	$Common_Size.$ctor1 = function(width, height) {
		var $this = {};
		$this.width = 0;
		$this.height = 0;
		$this.width = width;
		$this.height = height;
		return $this;
	};
	$Common_Size.$ctor = function() {
		var $this = {};
		$this.width = 0;
		$this.height = 0;
		return $this;
	};
	global.Common.Size = $Common_Size;
	////////////////////////////////////////////////////////////////////////////////
	// Common.StringExtensions
	var $Common_StringExtensions = function() {
	};
	$Common_StringExtensions.__typeName = 'Common.StringExtensions';
	$Common_StringExtensions.formatMe = function(str, values) {
		return ss.formatString.apply(null, [str].concat(values));
	};
	global.Common.StringExtensions = $Common_StringExtensions;
	////////////////////////////////////////////////////////////////////////////////
	// Common.TypeOrFunction
	var $Common_TypeOrFunction$1 = function(T) {
		var $type = function(type) {
			this.$1$FuncSetField = null;
			this.$1$FuncGetField = null;
			this.$1$TypeValueField = ss.getDefaultValue(T);
			this.set_typeValue(type);
		};
		$type.$ctor1 = function(_get, _set) {
			this.$1$FuncSetField = null;
			this.$1$FuncGetField = null;
			this.$1$TypeValueField = ss.getDefaultValue(T);
			this.set_funcGet(_get);
			this.set_funcSet(_set);
		};
		ss.registerGenericClassInstance($type, $Common_TypeOrFunction$1, [T], {
			get_funcSet: function() {
				return this.$1$FuncSetField;
			},
			set_funcSet: function(value) {
				this.$1$FuncSetField = value;
			},
			get_funcGet: function() {
				return this.$1$FuncGetField;
			},
			set_funcGet: function(value) {
				this.$1$FuncGetField = value;
			},
			get_typeValue: function() {
				return this.$1$TypeValueField;
			},
			set_typeValue: function(value) {
				this.$1$TypeValueField = value;
			},
			getValue: function() {
				if (ss.isNullOrUndefined(this.get_typeValue()) && (ss.staticEquals(this.get_funcGet(), null) && ss.staticEquals(this.get_funcSet(), null))) {
					return ss.getDefaultValue(T);
				}
				if (ss.isNullOrUndefined(this.get_typeValue()) && !ss.staticEquals(this.get_funcGet(), null)) {
					return this.get_funcGet()();
				}
				return this.get_typeValue();
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		$type.$ctor1.prototype = $type.prototype;
		return $type;
	};
	$Common_TypeOrFunction$1.__typeName = 'Common.TypeOrFunction$1';
	ss.initGenericClass($Common_TypeOrFunction$1, $asm, 1);
	global.Common.TypeOrFunction$1 = $Common_TypeOrFunction$1;
	ss.initClass($Common_Constants, $asm, {});
	ss.initClass($Common_EnumerableExtensions, $asm, {});
	ss.initClass($Common_ExtensionMethods, $asm, {});
	ss.initClass($Common_Help, $asm, {});
	ss.initClass($Common_IntPoint, $asm, {});
	ss.initClass($Common_Number, $asm, {});
	$Common_Number.$ctor1.prototype = $Common_Number.prototype;
	ss.initClass($Common_Point, $asm, {});
	ss.initClass($Common_Size, $asm, {});
	ss.initClass($Common_StringExtensions, $asm, {});
	$Common_Help.functionFormat = '(function(){{{0}}})';
})();
