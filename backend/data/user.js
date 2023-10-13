import bcrypt from 'bcryptjs';

const users = [
    {
        
        name: 'Doe',
        email: 'johndoe@ex.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        
        name: 'Jane Doe',
        email: 'jedoe@ex.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: false
    },
    {
        
        name: 'Jane Man',
        email: 'janeoe@ex.com',
        password: bcrypt.hashSync('12356', 10),
        isAdmin: false
    },
    {
        
        name: 'Julia',
        email: 'edoe@ex.com',
        password: bcrypt.hashSync('12456', 10),
        isAdmin: false
    },
]
export default users
