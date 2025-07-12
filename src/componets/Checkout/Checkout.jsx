import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { cartcontext } from '../../Context/Cartcontext';

export default function Checkout() {
  const { chectoutsession } = useContext(cartcontext);

  const formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city: '',
    },
    onSubmit: async (values) => {
      const response = await chectoutsession(values);
      if (response.status === 'success') {
        window.location.href = response.session.url;
      }
      console.log(response);
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-green-900">
          Pay Now...!
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={formik.handleSubmit}>
            {/* Details */}
            <div className="mt-4">
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                Details Address
              </label>
              <input
                id="details"
                name="details"
                type="text"
                value={formik.values.details}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-sm"
              />
            </div>

            {/* Phone */}
            <div className="mt-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-sm"
              />
            </div>

            {/* City */}
            <div className="mt-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-800 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

