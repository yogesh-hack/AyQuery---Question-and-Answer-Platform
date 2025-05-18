import React from 'react'
import DetailStore from '../../components/Stores/DetailStore'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

const StoreDetails =  ({ slideIn, handleSlideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Sidebar */}
                <div className="lg:col-span-1 w-full">
                    <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
                </div>
    
                {/* Main Content Area */}
                <div className="lg:col-span-3 w-full mt-20">
        <DetailStore/>
        </div>
    </div>
  )
}

export default StoreDetails