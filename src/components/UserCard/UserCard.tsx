import { UserData } from "store/redux/users/types";

function UserCard(user: UserData)
{

    return (
        <> {`${user.id}`}</>
    )
}
export default UserCard;