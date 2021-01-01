import React, { useState } from 'react';
import EmptyMiniCart from './EmptyMiniCart';
import MiniCart from './MiniCart';

const MiniCartPanel = ({cartItems}) => {
    const [isMiniCartVis, setisMiniCartVis] = useState(true);

    /* useEffect(() => {
        setisMiniCartVis(true)
        return () => {
            // console.log('whatever should go!')
        }
    }, [isMiniCartVis])
 */

    return (
        <React.Fragment>
        { isMiniCartVis ? 
            <div className='miniCartPanel'>
                <div className='miniCartTip'></div>
                <div className='miniCartWrap'>
                    {cartItems.length > 0 ? <MiniCart /> : <EmptyMiniCart />}
                </div>                
                <div className='miniCartClose' onClick={() => setisMiniCartVis(false)}>X</div>
            </div>  : null }
        </React.Fragment>
    )
}

export default MiniCartPanel;