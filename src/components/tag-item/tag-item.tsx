import React from 'react'

type Props = {
    index: number,
    tag: string
}

const TagItem = ({ index, tag }: Props) => {
  return (
    <li className={`${index === 0 ? "dark:text-gray-900 dark:bg-white text-white bg-dark-shade-100 px-2.5" : "dark:text-white text-gray-800 px-1.5"} text-[.83rem] capitalize py-0.5 rounded-full`}>{tag}</li>
  )
}

export default TagItem;