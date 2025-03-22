import { Logger } from '@application/services/logger';

const info = (message: string, metadata?: object): void => {
    console.info(message, metadata);
};

const error = (message: string, metadata?: object): void => {
    console.error(message, metadata);
};

export const getLogger = (): Logger => ({ info, error });
