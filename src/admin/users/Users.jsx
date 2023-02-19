import { deleteUser } from 'firebase/auth'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { toast } from 'react-toastify'
import useAuth from '../../customHooks/useAuth'
import useGetData from '../../customHooks/useGetData'
import { db } from '../../firebase.config'

const Users = () => {
    const { data: usersData } = useGetData('users')
    // const { currentUser } = useAuth()
    console.log(usersData);

    let deleteWebsiteUser = async (id) => {
        await deleteDoc(doc(db, 'users', id))
        toast.success('User Deleted!')

        // await deleteUser(currentUser).then(() => {
        //     toast.success('User Deleted!')
        // }).catch((error) => {
        //     toast.error(error.message)
        // });
    }

    return (
        <div className='all-products-section'>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        usersData.map((item, index) => (
                            <tr key={index}>
                                <td className='image'><img src={item.data.photoURL} alt="product-pic" /></td>
                                <td>{item.data.nameVal}</td>
                                <td>{item.data.emailVal}</td>
                                <td><button className='delete-btn' onClick={() => deleteWebsiteUser(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users
