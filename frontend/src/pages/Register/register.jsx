

function register() {
  return (
      
      <div class="grid grid-cols-2 gap-4">
  <div class="col-span-2 sm:col-span-1">
    <label class="block font-medium text-gray-700">First name</label>
    <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"/>
  </div>
  <div class="col-span-2 sm:col-span-1">
    <label class="block font-medium text-gray-700">Last name</label>
    <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"/>
  </div>
  <div class="col-span-2 sm:col-span-1">
    <label class="block font-medium text-gray-700">Email address</label>
    <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"/>
  </div>
  <div class="col-span-2 sm:col-span-1">
    <label class="block font-medium text-gray-700">Password</label>
    <input type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"/>
  </div>
  <div class="col-span-2 sm:col-span-1">
    <label class="block font-medium text-gray-700">Confirm password</label>
    <input type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"/>
  </div>
  <div class="col-span-2">
    <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"/>
      Register
    </button>
  </div>
</div>


  )
}

export default register