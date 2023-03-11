import User from './User/User'
import style from './Users.module.css'

const Users = ({ users }) => {
  return (
    <div className={style.users}>
      {users.map(({ id, name, age }) => {
        return <User key={id} name={name} age={age} />
      })}
    </div>
  )
}

export default Users