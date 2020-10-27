import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin user',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'john Doe',
    email: 'john@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'jane Doe',
    email: 'jane@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
