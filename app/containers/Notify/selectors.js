import { sget } from 'helpers/handlers';
export const notify = state => sget(state, 'notify.payload.list', []);
