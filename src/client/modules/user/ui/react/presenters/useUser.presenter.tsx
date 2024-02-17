import userHttpActionsStub from '../../../infra/actions/user.action.stub'
import useUserManagementStore from '../../store/UserManagementStore'

const useUserPresenter = () => {
  const gateway = userHttpActionsStub
  const store = useUserManagementStore()

  const handleGetUsers = async () => {
    const res = await gateway.getUsers()
    store.setUsers(res)
  }

  return {
    handleGetUsers,
  }
}

export default useUserPresenter
