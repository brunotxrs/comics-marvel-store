import { useEffect, useState } from 'react';
import {  useFetchApiComicVine  } from '../../../services/api'
import {  BoxBanner, LiBanner, ImgBanner, Loader  } from '../styles'


function ModuleBanners(){
    const allBanners = useFetchApiComicVine();
    const [randomBanners, setRandomBanners] = useState([]);

    useEffect(() => {
        if(allBanners && allBanners.length > 0){
            const shuffledBanners = [...allBanners].sort(() => 0.5 - Math.random());


            setRandomBanners(shuffledBanners.slice(0, 2));
        }
    }, [allBanners])

    return (
        <>

        <BoxBanner>
            {randomBanners.length > 0 ? (
                randomBanners.map((banner) => (
                    <LiBanner key={banner.id}>
                        <ImgBanner src={banner.image.original_url} alt={banner.name} />
                    </LiBanner>
                ))

            ): (
                <Loader />
            )}


        </BoxBanner>



        </>

    );

}

export default ModuleBanners;


