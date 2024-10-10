import { getUsers } from '@/api/users';
import { atom } from 'nanostores';

// const initialValue = [
//     {
//         id: 1,
//         name: 'User Admin',
//         age: 28,
//         isAdmin: true,
//     },
//     {
//         id: 2,
//         name: 'NOT Admin',
//         age: 35,
//         isAdmin: false,
//     },
//     {
//         id: 3,
//         name: 'Another Admin',
//         age: 46,
//         isAdmin: true,
//     },
// ];

async function getUsersData() {
    try {
        return await getUsers();
    } catch (error) {
        console.error(error);
        alertMessage("Error", "An error occurred", "error");
    }
}

const initialUsers = getUsersData();

const users = atom(initialUsers);

const addUser = function addUser(user) {
    users.set([...users.get(), user]);
};

export { users, addUser };