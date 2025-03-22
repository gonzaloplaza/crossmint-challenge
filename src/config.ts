import 'dotenv/config';

export const config = {
    megaverseApi: {
        baseUrl: process.env.MEGAVERSE_API_BASE_URL ?? '',
        candidateId: process.env.CROSSMINT_CANDIDATE_ID ?? '',
        timeout: 3000,
        maxRetries: 5,
        retryDelay: 3000,
    },
} as const;

export type Configuration = typeof config;
export type ClientConfiguration<K extends keyof typeof config> = Configuration[K];
