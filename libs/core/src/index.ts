import { v4 as genUUID } from 'uuid';

const uuid = `This is UUID from another TS module without compiling: ${genUUID()}`;

export default uuid;
