import "./contact.css";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

const supabaseUrl = "https://upneoblnvjitlbqvwbwn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwbmVvYmxudmppdGxicXZ3YnduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NzAxMTUsImV4cCI6MjAxMDA0NjExNX0.-wrcR2D1WcdyZFD7ioeiw1umdD2_3S0e75GKG6LA92U";

const supabase = createClient(supabaseUrl, supabaseKey);

function Contacts() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name , value", name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase
        .from("Contacts")
        .insert([formData]);
      if (error) {
        console.error(error);
      } else {
        console.log("Data inserted:", data);
        setFormData({
          first_name: "",
          last_name: "",
          message: "",
          email: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <main>
        <h1>Contact Me</h1>
        <form method="post" action="/api/contacts" onSubmit={handleSubmit}>
          <div>
            {/* <span className="required-field"></span>
            <label htmlFor="id">id</label>
            <input
              type="num"
              id="id"
              name="id"
              onChange={handleChange}
              required
            /> */}

            <span className="required-field"></span>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              onChange={handleChange}
              required
              minLength="2"
              maxLength="35"
              autoComplete="given-name"
            />

            <span className="required-field"></span>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={handleChange}
              required
              minLength="2"
              maxLength="35"
            />

            <span className="required-field"></span>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
              required
              minLength="2"
              maxLength="35"
            />

            <span className="required-field"></span>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              autoComplete="email"
            />
{/* 
            <span className="required-field"></span>
            <label htmlFor="createdAt">createdAt</label>
            <input
              type="string"
              id="createdAt"
              name="createdAt"
              onChange={handleChange}
              required
            />

            <span className="required-field"></span>
            <label htmlFor="updatedAt">updatedAt</label>
            <input
              type="string"
              id="updatedAt"
              name="updatedAt"
              onChange={handleChange}
              required
            /> */}
          </div>
          <Link to="/thank">
            <input type="Submit" onClick={(event) => handleSubmit(event)} />
          </Link>
        </form>
      </main>
    </div>
  );
}

export default Contacts;