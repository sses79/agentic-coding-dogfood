import { greeting } from './src/greeting.mjs';

if (greeting() !== 'Hello') {
  throw new Error('default greeting must remain Hello');
}
