import path from 'path';

export const ROOT_DIR = path.resolve(process.cwd());

export const SRC_DIR = path.join(ROOT_DIR, 'src');

export const DIST_DIR = path.join(ROOT_DIR, 'dist');

export const ENVS_DIR = path.join(ROOT_DIR, 'environments');
