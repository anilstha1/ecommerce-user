import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <div className="text-center text-black text-sm">
          &copy; {new Date().getFullYear()} E-commerce App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
