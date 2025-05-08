import { currentUser } from "@/lib/auth"
import ProfileCard from "./_components/profile-card";

const ProfilePage = async () => {
  const user = await currentUser();


  return (
    <ProfileCard user={user} label="My Profile"/>
  )
}

export default ProfilePage