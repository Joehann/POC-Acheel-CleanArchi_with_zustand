import { ReactElement } from 'react'
import style from './input.module.css'

const Input = ({ value, onChange, name, label }: Props): ReactElement => {
  return (
    <div className={style['input']}>
      <label className={style.label}>{label}</label>
      <input value={value} onChange={(e) => onChange(name, e.target.value)} />
    </div>
  )
}

export default Input

type Props = {
  value: string
  name: string
  label: string
  onChange: (key: string, value: string) => void
}
