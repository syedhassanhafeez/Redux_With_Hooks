import { useSelector } from 'react-redux';

const Users = (props) => {
    const state = useSelector((state) => state)
    console.log(state);
    return <div>User Components</div>
}

export default Users;