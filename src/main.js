
import { Notifier } from './notifier/notifier.js';
import { ConsoleChannel } from './notifier/channels/console-channel.js';
import { processCluster } from './cluster-manager/cluster-manager.js';
import ms from 'ms';
import { DEV } from './config/config.js';
import { FSChannel } from './notifier/channels/fs-channel.js';

export const notifier = new Notifier();
notifier.addChannel(DEV ? new ConsoleChannel() : new FSChannel());

async function main() {
  try {
    notifier.info('Cluster process start');
    await processCluster();
    notifier.info('Cluster process finish');
  } catch (e) {
    notifier.error('Could not process cluster', e.stack);
  }
}

await main();

if (!DEV) {
  setInterval(async () => main(), ms('5m'));
}

