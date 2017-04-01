const channels = [{
  id: 1,
  name: 'Eri',
  address: 'Bandung',
}, {
  id: 2,
  name: 'Wandri',
  address: 'Jawa Barat',
}];

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
  },
};