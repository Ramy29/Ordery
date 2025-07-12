import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';

export default function Login() {
  const { setlogin } = useContext(UserContext);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  // Form initial values
  const newUser = {
    email: '',
    password: '',
  };

  // Form validation schema using Yup
  const validateForm = yup.object().shape({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required").min(6),
  });

  // API call on form submit
  async function addapi(values) {
    setloading(true);
    try {
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/auth/signin',
        values
      );
      localStorage.setItem('usertoken', data.token); // Save token in local storage
      setlogin(data.token); // Set token in global state
      navigate('/products'); // Redirect to products
    } catch (err) {
      seterror(err.response?.data?.message || "Login failed");
    } finally {
      setloading(false);
    }
  }

  // Formik hook for form handling
  const formik = useFormik({
    initialValues: newUser,
    onSubmit: addapi,
    validationSchema: validateForm,
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-green-900">
          Log in...!
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={formik.handleSubmit}>
            {/* Email Input */}
            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="user@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:ring focus:ring-blue-200 focus:border-blue-300 sm:text-sm"
              />
              {/* Email Error */}
              {formik.errors.email && formik.touched.email && (
                <div className="mt-2 text-sm text-red-600">{formik.errors.email}</div>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:ring focus:ring-blue-200 focus:border-blue-300 sm:text-sm"
              />
              {/* Password Error */}
              {formik.errors.password && formik.touched.password && (
                <div className="mt-2 text-sm text-red-600">{formik.errors.password}</div>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 transition"
              >
                {loading ? (
                  <i className="fa-solid fa-spinner animate-spin"></i>
                ) : (
                  'Log in'
                )}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 text-center text-sm text-red-600 bg-red-100 py-2 px-4 rounded">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

