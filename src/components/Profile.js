
const Profile = () => {
    const userprofile = JSON.parse(localStorage.getItem('user'));
    console.log("user profile", userprofile)

    return (
        <div className="Profile">
            <h3>User Details</h3>
            <h2>Name :<b> {userprofile.name}</b></h2>
            <h2>Email: <i> {userprofile.email}</i></h2>
        </div>
    )
}

export default Profile;