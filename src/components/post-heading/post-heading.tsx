import React from 'react'

type Props = {
  heading: String
}

const PostHeading = ({ heading }: Props) => {
  return (
    <h4 className="text-lg font-bold">{heading}</h4>
  )
}

export default PostHeading