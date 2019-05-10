import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface ClaimStakedOngRewardsInput {
  network: string;
  broadcastOverride?: boolean;
}

interface ClaimStakedOngRewardsOutput {
  txid: string;
  nodeUrl: string;
}

export function claimStakedOngRewards(data: ClaimStakedOngRewardsInput): Promise<ClaimStakedOngRewardsOutput> {
  return sendMessage({
    command: StakeCommand.claimStakedOngRewards,
    data,
  });
}
