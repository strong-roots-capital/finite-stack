/**
 * @hidden
 */
export class AccessError extends Error {
    public constructor(message: string, context: Function) {
        super(message);
        // TODO: Node does not preserve the error name in output when using the below, why?
        Error.captureStackTrace(this, context);
        this.name = 'AccessError';
    }
}
