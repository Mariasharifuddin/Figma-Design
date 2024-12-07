const Footer = () => {
  return (
    <footer className="w-full h-[461px] bg-[#043873] opacity-100 px-[220px] py-[140px] mt-[100px]">
      <div className="flex justify-between gap-[200px]">
        {/* Left Section - Logo */}
        <div className="flex flex-col">
          <img src="logo.png" alt="Logo" className="max-w-[150px] w-full" />
          <p className="mt-4 text-white">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>

        {/* Product Section */}
        <div className="flex flex-col text-white">
          <h3 className="mb-4">Product</h3>
          <p>Overview Pricing Customer stories</p>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col text-white">
          <h3 className="mb-4">Resources</h3>
          <p>Blog Guides & tutorials Help center</p>
        </div>

        {/* Company Section */}
        <div className="flex flex-col text-white">
          <h3 className="mb-4">Company</h3>
          <p>About us Careers MediaKit</p>
          
        </div>

      </div>
      <div className="mb-10 mt-20 text-white flex justify-center">
  <p>©2021 Whitepace LLC.</p>
</div>
    </footer>
  );
};

export default Footer;
