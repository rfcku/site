import { gtFlg } from "../utils";
const Profile = ({ user }) => {
  // Show the user. No loading state is required
  const fl = gtFlg(76);
  return (
    <div>
      flag: {fl}
    </div>
  );
};

export default Profile;
