import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';

export default function Registration() {
  const { setlogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Initial values for form
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rePassword: '',
  };

  // Form validation schema using Yup
  const validateForm = yup.object({
    name: yup.string().min(3, "Minimum is 3 characters").required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().matches(/^01[0125][0-9]{8}$/, "Phone must be valid Egyptian number").required("Phone is required"),
    password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    rePassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Please confirm your password"),
  });

  // Submit handler
  async function handleSubmit(values) {
    try {
      setLoading(true);
      const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
      localStorage.setItem('usertoken', data.token);
      setlogin(data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validateForm,
    onSubmit: handleSubmit,
  });

  // Reusable input error component
  const InputError = ({ error }) => (
    <div className="bg-red-200 text-red-800 text-sm p-2 rounded my-2">{error}</div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 px-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-green-900">Create a new account</h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-md sm:rounded-lg">
          <form onSubmit={formik.handleSubmit}>

            {/* Name Field */}
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && <InputError error={formik.errors.name} />}

            {/* Email Field */}
            <label htmlFor="email" className="block text-sm font-medium mt-4 text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && <InputError error={formik.errors.email} />}

            {/* Phone Field */}
            <label htmlFor="phone" className="block text-sm font-medium mt-4 text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && <InputError error={formik.errors.phone} />}

            {/* Password Field */}
            <label htmlFor="password" className="block text-sm font-medium mt-4 text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && <InputError error={formik.errors.password} />}

            {/* Confirm Password Field */}
            <label htmlFor="rePassword" className="block text-sm font-medium mt-4 text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
            />
            {formik.touched.rePassword && formik.errors.rePassword && <InputError error={formik.errors.rePassword} />}

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full py-2 px-4 bg-green-500 hover:bg-green-700 text-white text-sm font-medium rounded-md"
            >
              {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : 'Create Account'}
            </button>

            {/* Error Message */}
            {error && <div className="mt-4 bg-red-300 text-white text-center py-2 rounded">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

