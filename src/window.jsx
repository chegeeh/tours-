import { useLayoutEffect, useState } from 'react';

export default function windowpos(){
	const [animation, setAnimation] = useState(false);

	uselayoutEffect (()=>{
		function updatePosition(){
			const offSetHeight = window.document.getElementaryById(id).offsetHeight;
			if (window.pageYOffset > offSetHeight *0.7) {
				setAnimation(true);
			}
		}
		window.addEventListener('scroll', updatePosition);
		updatePosition();
		return () => window.removeElementListener('scroll', updatePosition);
	},[id]);
	return animation;
}