import React from 'react';
import { Link } from 'react-router-dom';

const FooterPage = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center items-center gap-4 mt-20 text-xs font-[400] text-[#737373]'>
        <Link to="/Meta" className='hover:border-b hover:border-[#737373]'>Meta</Link>
        <Link to="/about" className='hover:border-b hover:border-[#737373]'>About</Link>
        <Link to="/Blog" className='hover:border-b hover:border-[#737373]'>Blog</Link>
        <Link to="/Jobs" className='hover:border-b hover:border-[#737373]'>Jobs</Link>
        <Link to="/Help" className='hover:border-b hover:border-[#737373]'>Help</Link>
        <Link to="/API" className='hover:border-b hover:border-[#737373]'>API</Link>
        <Link to="/Privacy" className='hover:border-b hover:border-[#737373]'>Privacy</Link>
        <Link to="/Terms" className='hover:border-b hover:border-[#737373]'>Terms</Link>
        <Link to="/Locations" className='hover:border-b hover:border-[#737373]'>Locations</Link>
        <Link to="/InstagramLite" className='hover:border-b hover:border-[#737373]'>Instagram Lite</Link>
        <Link to="/Threads" className='hover:border-b hover:border-[#737373]'>Threads</Link>
        <Link to="/Contact uploading and non-users" className='hover:border-b hover:border-[#737373]'>Contact uploading and non-users</Link>
        <Link to="/MetaVerified" className='hover:border-b hover:border-[#737373]'>Meta Verified</Link>
      </div>

      <div className="flex flex-wrap justify-center mt-5 mb-16 text-sm  text-[#737373] gap-2">
        <div>
          <select className="outline-none ">
            <option value="English(UK)">English (UK)</option>
            <option value="English(US)">English (US)</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
        <div >© 2025 Instagram from Meta</div>
      </div>

    </div>
  );
};

export default FooterPage;
