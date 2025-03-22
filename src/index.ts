#!/usr/bin/env node
import { getLogger } from '@adapters/logger';
import { getMegaverseApiClient } from '@adapters/megaverse/client';
import { megaverseApi } from '@adapters/megaverse/megaverse_api';
import { createCrossmintLogo } from '@application/use_cases/create_crossmint_logo';

import { config } from '@/config';
export const logger = getLogger();

const megaverseApiClient = getMegaverseApiClient(config.megaverseApi);
const { getMapData, insertPolyanet, insertCometh, insertSoloon } = megaverseApi(megaverseApiClient);

getMapData()
    .then(async (goalMapData) =>
        createCrossmintLogo(insertPolyanet, insertCometh, insertSoloon, logger)(goalMapData),
    )
    .then(() => logger.info(`Crossmint Logo created successfully with figures 🚀!`))
    .catch((error) => logger.error(error));
