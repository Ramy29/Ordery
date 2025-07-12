import React from 'react';

export default function AboutUs() {
  return (
    <>
      <div className="bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-4 py-8">

          {/* Header Section */}
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-bold mb-4 text-green-800 text-center">
              🌟 Discover the Ultimate Shopping Experience! 🌟
            </h1>
          </div>

          <div className="flex items-center w-full">
            <span className="flex-grow bg-rose-400 rounded h-1 my-4" />
            <span className="flex-grow bg-rose-400 rounded h-1 my-4" />
          </div>

          {/* Intro Paragraph */}
          <section className="mt-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-800">Terms of Service for Your Business</h2>
            <p className="text-base mb-6">
              Welcome to Ordery! By using this website, you agree to our terms. If you do not accept them, please do not use our services. These terms govern all aspects of our website and services.
            </p>
          </section>

          {/* General Section */}
          <section className="mb-8">
            <h3 className="font-bold text-orange-700 dark:text-orange-300 text-lg mb-4">General</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>
                By accessing this website, you agree to be bound by these terms, applicable laws, and copyright protections.
              </li>
              <li>
                We reserve the right to update terms without prior notice. You will be notified via email when applicable.
              </li>
            </ul>
          </section>

          {/* Products and Services */}
          <section className="mb-8">
            <h3 className="font-bold text-orange-700 dark:text-orange-300 text-lg mb-4">Products and Services</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>All products are subject to availability.</li>
              <li>We may modify or discontinue services without notice.</li>
              <li>Product images are for illustration and may vary.</li>
            </ul>
          </section>

          {/* Pricing and Payment */}
          <section className="mb-8">
            <h3 className="font-bold text-orange-700 dark:text-orange-300 text-lg mb-4">Pricing and Payment</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>All prices are in Ordery currency and may include taxes or fees.</li>
              <li>We accept Stripe as a payment method.</li>
              <li>Orders are processed only after payment is received.</li>
            </ul>
          </section>

          {/* Shipping and Delivery */}
          <section className="mb-8">
            <h3 className="font-bold text-orange-700 dark:text-orange-300 text-lg mb-4">Shipping and Delivery</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>Shipping costs and estimated delivery times are shown at checkout.</li>
              <li>We are not responsible for carrier delays or customs issues.</li>
            </ul>
          </section>

          {/* Returns and Refunds */}
          <section className="mb-8">
            <h3 className="font-bold text-orange-700 dark:text-orange-300 text-lg mb-4">Returns and Refunds</h3>
            <ul className="space-y-4 list-disc pl-5">
              <li>Returns are accepted within 7 days if unused and in original packaging.</li>
              <li>Refunds are issued after product inspection.</li>
              <li>Some items (e.g., underwear) are non-returnable.</li>
            </ul>
          </section>

        </div>
      </div>
    </>
  );
}

