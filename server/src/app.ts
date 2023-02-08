import { FastifyPluginAsync } from 'fastify';
import sensible from './plugins/sensible';
import support from './plugins/support';
import root from './routes/root';
import example from './routes/example';

export type AppOptions = {
  // Place your custom options for app below here.
};


// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
}

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts
): Promise<void> => {
  void fastify.register(sensible);
  void fastify.register(support);

  void fastify.register(root);
  void fastify.register(example, {prefix: 'example'});
};

export default app;
export { app, options }
