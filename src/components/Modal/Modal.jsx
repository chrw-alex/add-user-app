import style from './Modal.module.css'

const Modal = ({ validationError, setValidationError }) => {
  return (
    <div className={style.layout} onClick={() => setValidationError('')}>
      <div className={style.modal}>
        <div className={style.errorText}>
          <p>{validationError}</p>
        </div>
        <div>
          <button className={style.button} onClick={() => setValidationError('')}>Закрыть</button>
        </div>
      </div>
    </div>
  )
}

export default Modal