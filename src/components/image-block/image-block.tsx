import React from 'react';
import Image from 'next/image';
import BlockImage from '../../../public/assets/images/wallpaperflare.com_wallpaper (10).jpg';


const ImageBlock = ({ index }: number) => {
	return (
		<figure className={`image-block-${index} rounded-sm overflow-hidden`}>
			<Image
				src={BlockImage}
				alt={`hero-image-block-${index}`}
				width={368}
				height={400}
				className="object-cover"
			/>
		</figure>
	)
}

export default ImageBlock;
