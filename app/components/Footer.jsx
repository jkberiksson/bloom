export default function Footer() {
    return (
        <footer className='w-full h-[80vh] bg-black text-white p-12 flex flex-col text-center'>
            <div className='flex flex-col lg:text-center justify-center items-center gap-12 flex-1'>
                {/* Logo & Tagline */}
                <div>
                    <h2 className='text-3xl font-bold'>BLOOM</h2>
                    <p className='text-gray-400 mt-2'>Crafting stunning visual experiences from the heart of Paris.</p>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col gap-2'>
                    <h3 className='text-lg font-semibold'>Explore</h3>
                    <div className='flex gap-2'>
                        <div className='text-gray-400 hover:text-white transition cursor-pointer'>Home</div>
                        <div className='text-gray-400 hover:text-white transition cursor-pointer'>About</div>
                        <div className='text-gray-400 hover:text-white transition cursor-pointer'>Projects</div>
                        <div className='text-gray-400 hover:text-white transition cursor-pointer'>Contact</div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4'>
                © {new Date().getFullYear()} BLOOM. All rights reserved.
            </div>
        </footer>
    );
}
