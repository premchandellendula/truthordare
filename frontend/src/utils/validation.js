import { z } from 'zod';

// Zod schema to validate player names
const playerNameSchema = z.string().min(1, 'Name cannot be empty');
const playersSchema = z.array(playerNameSchema).max(15, 'You can only add up to 15 players');

const uniquePlayersSchema = (players) => {
  return z.array(z.string()).refine((players) => {
    return new Set(players).size === players.length;
  }, {
    message: 'Player names must be unique',
  });
};


export { playerNameSchema, playersSchema, uniquePlayersSchema };

