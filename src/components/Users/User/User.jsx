import ageFormatter from '../../../helpers/ageFormatter'
import style from './User.module.css'

const User = ({ name, age }) => {
  return (
    <div className={style.user}>
      <p>{name + ' - ' + age + ageFormatter(age)}</p>
    </div>
  )
}

export default User