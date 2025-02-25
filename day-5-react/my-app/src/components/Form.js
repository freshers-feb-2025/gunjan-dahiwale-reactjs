import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const login = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = (field, value) => {
    let newErrors = { ...errors };

    if (field === "name") {
      newErrors.name = value.trim() ? "" : "Name is required";
    }

    if (field === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Email is not valid";
      } else {
        newErrors.email = "";
      }
    }

    if (field === "password") {
      newErrors.password =
        value.length >= 6 ? "" : "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name and value", name, value);
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateForm(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateForm(name, formData[name]);
    
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    /\S+@\S+\.\S+/.test(formData.email) &&
    formData.password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", password: "" });
    setTouched({ name: false, email: false, password: false });
    console.log("form data", formData);
    
    try {
        await login(formData.email, formData.password);
        navigate("/dashboard"); 
      } catch (err) {
        setErrors(err.message);
      }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Register</h2>

      <div className={styles.formGroup}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && (
          <p className={styles.error}>{errors.name}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && (
          <p className={styles.error}>{errors.email}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <p className={styles.error}>{errors.password}</p>
        )}
      </div>

      <button className={styles.button} type="submit" disabled={!isFormValid}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
