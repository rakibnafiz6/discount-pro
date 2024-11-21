
const Testimonial = () => {
    const users = [
        { id: 1, name: "John Doe", feedback: "Discount PRO has completely transformed the way I shop online. I used to spend hours searching for coupons and checking if they were valid. Now, with this app, everything is in one place, and I can quickly find discounts for my favorite stores without hassle. The expiry date feature is incredibly helpful, as it ensures I never miss a deal" },
        { id: 2, name: "Jane Smith", feedback: "As an avid online shopper, I’ve tried various apps and websites to find discount codes, but nothing compares to Discount PRO. The app is intuitive, and I was able to sign up with my Google account in seconds. Once inside, I was amazed by the variety of coupons available for so many e-commerce stores in Bangladesh"},
        { id: 3, name: "Alex Johnson" , feedback: "I can’t recommend Discount PRO enough! From the moment I logged in, I was impressed by how seamless the process was. I appreciate how all the coupons are categorized by brand and product type, making it easy to find exactly what I need. The interface is clean and user-friendly."},
      ];
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-4">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {users.map((user) => (
         <div className="card bg-neutral text-white w-96 shadow-xl">
         <div className="card-body">
           <h2 className="card-title">{user.name}</h2>
           <p className="text-cyan-500 font-medium text-base">{user.feedback}</p>
        
         </div>
       </div>
        ))}
      </div>
        </div>
    );
};

export default Testimonial;