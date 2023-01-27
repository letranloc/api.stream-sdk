/**
 * Wrap class property with error handler.
 *
 * This decorator wraps a given class property, informing the consumer why this property isn't set. It provides
 * a slightly cleaner user experience than making every property optional.
 */
export declare function RequiresSdkAuthentication(): (target: Object, propertyKey: string) => void;
