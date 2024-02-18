import style from './primary-button.module.css'
import { ReactElement } from 'react'

const PrimaryButton = ({ label, onClick }: Props): ReactElement => {
  return (
    <button className={style['primary-button']} onClick={onClick}>
      {label}
    </button>
  )
}

export default PrimaryButton

type Props = {
  label: string
  onClick: () => void
}
