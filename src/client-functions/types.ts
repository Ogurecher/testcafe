import builderSymbol from './builder-symbol';
import ClientFunctionBuilder from './client-function-builder';
import SelectorBuilder from './selectors/selector-builder';

export function isClientFunction (obj: any): boolean {
    if (typeof obj === 'function')
        return obj[builderSymbol] && obj[builderSymbol] instanceof ClientFunctionBuilder && !(obj[builderSymbol] instanceof SelectorBuilder);

    return false;
}

export function isSelector (obj: any): boolean {
    if (typeof obj === 'function')
        return obj[builderSymbol] && obj[builderSymbol] instanceof SelectorBuilder;

    return false;
}
