import { useState } from 'react'
import style from './UsersForm.module.css'

const UsersForm = ({ addUser, setValidationError }) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (name.trim().length === 0 || age.length === 0) {
      setValidationError('Поля не могут быть пустыми')
      return
    }

    if (age <= 0) {
      setValidationError('Возраст должен быть больше нуля')
      return
    }

    addUser(name, age)
    setName('')
    setAge('')
  }

  return (
    <div className={style.usersForm}>
      <form className={style.form} onSubmit={onSubmitHandler}>
        <div>
          <label className={style.label} htmlFor='name'>Имя</label>
          <input className={style.input} type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className={style.label} htmlFor='age'>Возраст</label>
          <input className={style.input} type='number' id='age' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className={style.actions}>
          <button className={style.button}>Добавить пользователя</button>
        </div>
      </form>
    </div>
  )
}

export default UsersForm