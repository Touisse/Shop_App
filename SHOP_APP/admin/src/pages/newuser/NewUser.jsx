import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './NewUser.css'
import { addUser } from "../../redux/apiCalls";
import swal from 'sweetalert';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

const NewUser = () => {

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const user = { ...inputs, img: downloadURL};
          addUser(user, dispatch);
          swal({
            title: "New User",
            text: "A new User has been successfully added.",
            icon: "success",
            button: "Go Back!",
          });
        });
      }
    );
  };


  return (
    <div className="newUser">
    <h1 className="newUserTitle">New User</h1>
    <form className="newUserForm">
    <div className="newUserItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      <div className="newUserItem">
        <label>Username</label>
        <input  name="username" type="text" placeholder="username" onChange={handleChange} />
      </div>
      <div className="newUserItem">
        <label>Email</label>
        <input name="email" type="email" placeholder="email" onChange={handleChange} />
      </div>
      <div className="newUserItem">
        <label>Password</label>
        <input name="password" type="password" placeholder="password" onChange={handleChange} />
      </div>
      <div className="newUserItem">
        <label>Phone</label>
        <input name="phone" type="text" placeholder="phone" onChange={handleChange}/>
      </div>
      <div className="newUserItem">
        <label>Address</label>
        <input name="address" type="text" placeholder="Address" onChange={handleChange} />
      </div>
      <div className="newUserItem">
          <label>Gender</label>
          <select name="gender" onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      <button onClick={handleClick} className="newUserButton">Create</button>
    </form>
  </div>
  )
}

export default NewUser