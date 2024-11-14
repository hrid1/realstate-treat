import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvier/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(user);
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (e) => {
    // Update displayName in state as the input changes
    setUserData((prevData) => ({ ...prevData, displayName: e.target.value }));
  };

  //   handleUpdateForm
  const handleUpdateForm = (e) => {
    e.preventDefault();
    // const userName = e.target.username.value;
    const userName = userData.displayName;
    setIsEdit(false);

    updateProfile(user, {
      displayName: userName,
    })
      .then(() => {
        // Update the local state with the new displayName
        setUserData((prevData) => ({ ...prevData, displayName: userName }));
        toast.success("Profile updated successfully!");
      })
      .catch(() => toast.error("Update Failed!"));
  };

  //   handle edit button
  const handleEditBtn = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="container mx-auto my-4 ">
      <div className="my-6">
        <h1 className="text-2xl my-4">
          Hello, <span>{userData?.displayName || "Not Available"} </span>
        </h1>
      </div>
      <h2 className="font-bold text-3xl ">Update Profile Information</h2>
      <section className="flex  items-cente justify-center">
        <div className="my-8 w-full rounded-md md:w-2/3 lg:w-1/3 mx-auto border shadow-md bg-opacity-50 py-4 px-6 ">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">My Profile</h2>
            <button
              onClick={handleEditBtn}
              className="text-xl font-bold cursor-pointer flex items-center justify-center gap-2"
            >
              Edit
              <FaRegEdit />
            </button>
          </div>
          <hr className="my-4 border-dashed bg-gray-700" />
          {/* form */}
          <form onSubmit={handleUpdateForm} className=" space-y-2.5">
            <div className="w-7/8">
              <label htmlFor="userName">Email Address</label>
              <br />
              <input
                defaultValue={userData?.email || "hio"}
                className="border outline-none px-3 py-1.5 rounded-md w-full mt-1"
                name="email"
                id="email"
                type="text"
                placeholder="email"
                disabled
              />
            </div>
            <div className="w-7/8">
              <label htmlFor="userName">User Name</label>
              <br />
              <input
                key={isEdit}
                value={userData?.displayName || "hridoy"}
                onChange={handleInputChange}
                className="border outline-none px-3 py-1.5 rounded-md w-full mt-1 focus:outline-none"
                name="username"
                id="username"
                type="text"
                placeholder="username"
                disabled={!isEdit}
                autoFocus
              />
            </div>
            <div className="w-7/8">
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                defaultValue={"+088 01723-129535"}
                className="border outline-none px-3 py-1.5 rounded-md w-full mt-1"
                name="phone"
                id="phone"
                type="text"
                placeholder="phone"
                disabled
              />
            </div>

            <button className="btn bg-teal-600 text-white" disabled={!isEdit}>
              Update
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Profile;
