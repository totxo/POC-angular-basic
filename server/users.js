const casual = require('casual')

module.exports = () => {
  const data = {
    users: [],
  };

  for (let i = 0; i < 10; i++ ) {
    data.users.push({
      id: casual.uuid,
      name: casual.first_name,
      lastname: casual.last_name
    })
  }

  return data;
}
