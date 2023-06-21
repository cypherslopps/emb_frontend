import React from 'react'
// import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

const MenuItem = ({
  icon, 
  title, 
  action, 
  isActive = null,
}) => (
  <button
    className={`menu-item${isActive && isActive() ? ' bg-[#303030]' : 'hover:bg-[#303030]'} bg-transparent border-none rounded-[.4rem] text-white cursor-pointer h-[1.75rem] mr-[.25rem] p-[0.25rem] w-[1.75rem]`}
    onClick={action}
    title={title}
  >
    {title}
    {/*<svg className="remix fill-[currentColor] h-full w-full">
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg>*/}
  </button>
)

export default MenuItem;