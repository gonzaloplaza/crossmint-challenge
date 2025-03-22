export interface Logger {
    info: (message: string, metadata?: object) => void;
    error: (message: string, metadata?: object) => void;
}
