import getWorksList from '../../../core-logic/usecases/get-works-list/get-works-list.usecase'
import workHttpActionsStub from '../../../infra/actions/work.action.stub'
import workHttpActions from '../../../infra/actions/work.actions'
import useWorkStore from '../../store/workStore'

const useWorkPresenter = () => {
  const gateway = workHttpActionsStub
  // const gateway = workHttpActions
  const store = useWorkStore()

  const handleGetWorks = async () => {
    const res = await getWorksList(gateway)
    store.setWorks(res)
  }

  return {
    handleGetWorks,
  }
}

export default useWorkPresenter
