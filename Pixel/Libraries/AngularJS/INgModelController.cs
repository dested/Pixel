using System.Runtime.CompilerServices;

namespace ng
{
    [Imported]
    public interface INgModelController
    {
#if TODO
        $render(): void;
        $setValidity(validationErrorKey: string, isValid: bool): void;
        $setViewValue(value: string): void;

        // XXX Not sure about the types here. Documentation states it's a string, but
        // I've seen it receiving other types throughout the code.
        // Falling back to any for now.
        $viewValue: any;

        // XXX Same as avove
        $modelValue: any;
        
        $parsers: IModelParser[];
        $formatters: IModelFormatter[];
        $error: any;
        $pristine: bool;
        $dirty: bool;
        $valid: bool;
        $invalid: bool;        
#endif
    }
}