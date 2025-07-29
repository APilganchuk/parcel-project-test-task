const user1 = {
  name: 'Anna',
  address: {
    city: 'Kyiv',
  },
};

const r = JSON.stringify(user1);
console.log(r);
const user2 = JSON.parse(r);
console.log(user2);

user2.address.city = 'Lviv1';

console.log(user1.address.city);
