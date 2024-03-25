//import { v4 } from "uuid"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { UsersPageWrapper, Paragraph, UserCardWrapper } from "./styles"
import {
  usersSliceActions,
  usersSliceSelectors,
} from "store/redux/users/usersSlice"
import { UserData, UsersSliceState } from "store/redux/users/types"
import UserCard from "components/UserCard/UserCard"
function Users() {
  const users: UserData[] = useAppSelector(usersSliceSelectors.users)
  console.log(users)

  users.map((user: UserData) => {
    console.log(user.id)
    console.log(user.firstlastName)
  })
  return (
    <UsersPageWrapper>
      {users.map((user: UserData) => {
        return (
          <UserCardWrapper>
            <UserCard user={`${user}`}/>
          </UserCardWrapper>
        )
      })}
    </UsersPageWrapper>
  )
}

export default Users
