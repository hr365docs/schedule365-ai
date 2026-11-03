import * as React from 'react';
import Lightbox from './Lightbox';

function Integration(props){
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');

    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return(

        <>
           <h2 className='HR_heading HR_MT'>Connect {props.appName} with your other apps
                </h2>
                <div className='HR_MT'>
                    <img alt='Teams' src={"https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/site-ED/powerplatformtoolset_ReRdfzh4N_LZ2RVc0oJ.webp?updatedAt=1737976238067"  }   width="1200" 
    height="600" 
    loading="eager"
    fetchpriority="high"
                        onClick={() => openLightbox("https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/site-ED/powerplatformtoolset_ReRdfzh4N_LZ2RVc0oJ.webp?updatedAt=1737976238067")}
                    />
                </div>
                {/* <Lightbox
                        isOpen={isLightboxOpen}
                        onClose={closeLightbox}
                        imageUrl={selectedImageUrl}
                    /> */}
        
        </>
    )
}

export default Integration;