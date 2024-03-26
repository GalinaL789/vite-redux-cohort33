import Button from "components/Button/Button";
import { Paragraph } from "pages/UsersApp/Users/styles";
import { UserData } from "store/redux/users/types";
import { usersSliceActions } from "store/redux/users/usersSlice";

function UserCard({user}:{user:UserData})
{

    return (
        <>
        <Paragraph>userName: {user.firstlastName} </Paragraph>
        <Paragraph>age: {user.age} </Paragraph>
        <Paragraph> Job:{user.jobTitle}</Paragraph>
        {/* <Paragraph>id: {user.id}</Paragraph> */}
         {/* <Button  name="Delete User"
              type="button"
              onClick={() => {
                dispatch(usersSliceActions.deleteUser(user.id))
              }}
             /> */}
        </>
    )
}
export default UserCard;