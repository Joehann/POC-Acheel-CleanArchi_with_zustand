/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect } from 'react'
import WorkCard from '../../components/cards/WorkCard'
import style from './works-list.module.css'
import useWorkPresenter from '../../presenters/useWork.presenter'
import useWorkStore from '../../../store/WorkStore'

const WorkList = () => {
  const store = useWorkStore()
  const presenter = useWorkPresenter()

  useEffect(() => {
    void presenter.handleGetWorks()
  }, [])

  if (!store.works) return <p>Loading...</p>
  return (
    <div className={style['works-list']}>
      {store.works.map((u) => (
        <WorkCard key={u.uuid} data={u} />
      ))}
    </div>
  )
}

export default WorkList
