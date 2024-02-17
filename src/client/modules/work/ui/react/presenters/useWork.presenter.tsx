import workHttpActionsStub from '../../../infra/actions/work.action.stub'
import useWorkStore from '../../store/WorkStore'

const useWorkPresenter = () => {
  const gateway = workHttpActionsStub
  const store = useWorkStore()

  const handleGetWorks = async () => {
    const res = await gateway.getWorks()
    store.setWorks(res)
  }

  return {
    handleGetWorks,
  }
}

export default useWorkPresenter
