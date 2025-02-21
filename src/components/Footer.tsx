import React from 'react';
import * as Form from '@radix-ui/react-form';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <footer className="bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column - Store Info */}
          <div className="flex flex-col space-y-3">
            <h2 className="text-xl font-bold text-gray-900">Pixel Perfect</h2>
            <p className="text-gray-600 max-w-xs">
              Your one-stop destination for premium tech gadgets, accessories, and lifestyle products.
              Quality products, exceptional service since 2015.
            </p>
          </div>

          {/* Second Column - Categories */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
            <div className="flex flex-col space-y-2">
              {['Cameras', 'Headphones', 'Minicars', 'Watches', 'Sunglasses'].map((category) => (
                <a 
                  key={category} 
                  href={`/category/${category.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Third Column - Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for exclusive deals and product updates.
            </p>
            <Form.Root className="w-full">
              <div className="flex">
                <Form.Field name="email" className="w-full">
                  <div className="flex">
                    <Form.Control asChild>
                      <input
                        className="w-full border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </Form.Control>
                    <Form.Submit asChild>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r flex items-center transition-colors">
                        <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                        Subscribe
                      </button>
                    </Form.Submit>
                  </div>
                  <Form.Message className="text-sm text-red-500 mt-1" match="valueMissing">
                    Please enter your email
                  </Form.Message>
                  <Form.Message className="text-sm text-red-500 mt-1" match="typeMismatch">
                    Please provide a valid email
                  </Form.Message>
                </Form.Field>
              </div>
            </Form.Root>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Pixel Perfect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;