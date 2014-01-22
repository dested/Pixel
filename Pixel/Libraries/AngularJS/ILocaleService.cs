using System.Runtime.CompilerServices;

namespace ng
{
    [Imported]
    public interface ILocaleService
    {
#if TODO
        id: string;

        // These are not documented
        // Check angular's i18n files for exemples
        NUMBER_FORMATS: ILocaleNumberFormatDescriptor;
        DATETIME_FORMATS: any;
        pluralCat: (num: any) => string;
#endif
    }
}