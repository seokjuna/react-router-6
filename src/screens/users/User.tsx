import { Link, useOutletContext, useParams } from "react-router-dom";
import { users } from "../../db";
import { Outlet } from "react-router-dom";

function User() {
    console.log(useOutletContext());
    const { userId } = useParams();
    return (
        <div>
            <h1>
                User with id {userId} is named: {users[Number(userId) - 1].name}
            </h1>
            <hr />
            <Link to="followers">See Followers</Link> 
            <Outlet 
                context={{ 
                    nameOfMyUser: users[Number(userId) - 1].name
                }}
            />
        </div>
    );
}

export default User;