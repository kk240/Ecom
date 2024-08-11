import React from 'react'
import { Link } from 'react-router-dom';

const addresses = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        phone: "9762611679",
        street: '11th Main st',
        city: "Delhi",
        state: "Delhi",
        pin: "000001",
    },
    {
        name: 'jhon doe',
        email: 'jhon.doe@example.com',
        phone: "9524547612",
        street: '21st high street',
        city: "Pune",
        state: "Maharashtra",
        pin: "411033"
    },

]

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

const Checkout = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12'>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                <div className='lg:col-span-3'>
                    <form>
                        <div className="space-y-12 bg-white p-5">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">addressal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Country
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="street-address"
                                                name="street-address"
                                                type="text"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="city"
                                                name="city"
                                                type="text"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                            State / Province
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="region"
                                                name="region"
                                                type="text"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                            ZIP / Postal code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="postal-code"
                                                name="postal-code"
                                                type="text"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Add address
                                    </button>
                                </div>
                            </div>

                            <div className="border-b border-gray-900/10 pb-12">
                                {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    We'll always let you know about important changes, but you pick what else you want to hear about.
                                </p> */}
                                <ul role="list" className='flex flex-col gap-2'>
                                    {addresses.map((address) => (
                                        <li key={address.email} className="flex justify-between gap-x-6 py-5 px-5  border-solid border-2 ">
                                            <div className="flex min-w-0 gap-x-4 items-center ">
                                                <input
                                                    name="address"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                {/* <img alt="" src={address.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" /> */}
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.email}</p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.phone}</p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                {/* <p className="text-sm leading-6 text-gray-900">{address.role}</p> */}

                                                <div className="mt-1 flex items-center gap-x-1.5">
                                                    <p className="text-xs leading-5 text-gray-500">{address.street}</p>
                                                    <p className="text-xs leading-5 text-gray-500">{address.city}</p>
                                                </div>
                                                <div className="mt-1 flex items-center gap-x-1.5">
                                                    <p className="text-xs leading-5 text-gray-500">{address.state}</p>
                                                    <p className="text-xs leading-5 text-gray-500">{address.pin}</p>
                                                </div>

                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 space-y-10">

                                    <fieldset>
                                        <legend className="text-sm font-semibold leading-6 text-gray-900">Select Payment Menthod.</legend>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="cash"
                                                    name="payments"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="cash" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Cash/Card on delivery
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="card"
                                                    name="payments"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="card" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Online card payment
                                                </label>
                                            </div>

                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>


                    </form>

                </div>
                <div className='lg:col-span-2'>
                    {/* product list */}
                    <div className='bg-white p-5'>
                        <div className="flex-1">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                alt={product.imageAlt}
                                                src={product.imageSrc}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href={product.href}>{product.name}</a>
                                                    </h3>
                                                    <p className="ml-4">{product.price}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <div className="text-gray-500">
                                                    <label htmlFor="qtySelect" className="mr-2 text-sm font-medium leading-6 text-gray-900">
                                                        Qty
                                                    </label>
                                                    <select name='qtySelect' id='qtyId'>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                </div>

                                                <div className="flex">
                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div  >
                            <div className=" px-4   sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$262.00</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    >
                                        Checkout
                                    </a>
                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        or{' '}
                                        {/* <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                                </button> */}
                                        <Link to={"/"} className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Continue Shopping
                                            <span aria-hidden="true"> &rarr;</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Checkout