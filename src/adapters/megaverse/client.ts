import axios, { AxiosInstance } from 'axios';
import axiosRetry, {
    IAxiosRetryConfig,
    isIdempotentRequestError,
    isNetworkError,
    isRetryableError,
} from 'axios-retry';

import { ClientConfiguration } from '@/config';

export const getMegaverseApiClient = (
    config: ClientConfiguration<'megaverseApi'>,
): AxiosInstance => {
    const client = axios.create({
        baseURL: config.baseUrl,
        timeout: config.timeout,
    });

    client.interceptors.request.use((request) => {
        if (request.data && typeof request.data === 'object') {
            request.data.candidateId = config.candidateId;
        }

        if (request.url) {
            request.url = request.url.replace('candidateId', config.candidateId);
        }

        return request;
    });

    const options: IAxiosRetryConfig = {
        retries: config.maxRetries,
        retryCondition: (error: unknown): boolean => {
            if (axios.isAxiosError(error)) {
                return (
                    isNetworkError(error) ||
                    isIdempotentRequestError(error) ||
                    isRetryableError(error) ||
                    !error.response ||
                    error.response.status === 429
                );
            }
            return false;
        },
        retryDelay: () => config.retryDelay,
        shouldResetTimeout: true,
    };

    axiosRetry(client, options);

    return client;
};

export type MegaverseApiClient = ReturnType<typeof getMegaverseApiClient>;
