import { EOL } from 'os'
import { join } from 'path'
import { command, alias, description, each } from 'northbrook'
import { execute, isFile } from 'northbrook/helpers'

export const plugin =
  command(alias('rollup'), description('rollup your packages'))

each(plugin, function ({ pkg: { path, name } }, io) {
  if (!isFile(join(path, 'rollup.config.js'))) return Promise.resolve()

  io.stdout.write(`Running 'rollup -c' in ${name}...` + EOL + EOL)

  return execute('rollup', ['-c'], io, path)
    .then(() => io.stdout.write(`Completed bundling in ${name}` + EOL + EOL))
})
  .catch(() => process.exit(1))
