const Banner = () => {
    return (
        <header className='text-white text-sm px-2 py-2'>
            <hr />
        
            <div id="version" className="mt-2">
              <span className='text-green-500'>Chat App</span> version <span className='text-orange-300'>1.0.0</span> <span>2023-07-30 07:21:15</span> 
            </div>

            <div id="command" className="mt-2">
              <div className='text-orange-300'>Available Commands:</div>
              <div className='ps-8'>
                <span className='text-green-500'>clear &nbsp;&nbsp;&nbsp;</span> <span>Clear all chat</span>
              </div>
            </div>
      </header>
    );
}