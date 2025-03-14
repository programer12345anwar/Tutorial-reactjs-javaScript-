import { useState } from "react";

const AddNewDoctor = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nic: "",
    dob: "",
    gender: "",
    password: "",
    department: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    
    <div style={styles.container} className="p-5">
    <p className="text-center text-red-500 fs-5">Add new  Doctor</p>
      <div style={styles.imageSection} className="">
      

        <img
          src={
            formData.profileImage
              ? URL.createObjectURL(formData.profileImage)
              : "default-profile.jpg"
          }
          alt="Doctor"
          style={styles.image}
        />
        <input type="file" onChange={handleFileChange} style={styles.fileInput} />
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="nic"
          placeholder="NIC"
          value={formData.nic}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          style={styles.input}
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Department</option>
          <option value="cardiology">Cardiology</option>
          <option value="neurology">Neurology</option>
          <option value="orthopedics">Orthopedics</option>
        </select>
        <button type="submit" style={styles.submitButton}>
          Register New Doctor
        </button>
      </form>
    </div>
    
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-start",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
  },
  imageSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "20px",
  },
  image: {
    width: "500px",
    height: "300px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "10px",
    
 

     

  },
  fileInput: {
    marginTop: "10px",
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    width: "500px",
    height: "250px",

  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    gap: "10px",
  },
  input: {
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "600px",
    height: "40px",
    fontSize: "16px",



  },
  submitButton: {
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "indigo",
    color: "white",
    cursor: "pointer",
    width: "300px",
    height: "40px",
  },
};

export default AddNewDoctor;
