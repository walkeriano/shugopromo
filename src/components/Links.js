import React from 'react';
import LinkForm from './IsushiCreadorForm';
import IsushiCarta from './IsushiCartaForm';
import PromoForm from './IsushiPromoForm';
import {db} from '../firebase';


const Links = () => {

    const addOrEditLink = async (linkObject) => {
        
        console.log(linkObject);
    }

    return(
        <div>
            <LinkForm addOrEditLink={addOrEditLink} />
            <IsushiCarta addOrEditLink={addOrEditLink} />
            <PromoForm addOrEditLink={addOrEditLink} />
        </div>
    );
}

export default Links;