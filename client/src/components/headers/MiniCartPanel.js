import React from 'react';
import EmptyMiniCart from './EmptyMiniCart';
import MiniCart from './MiniCart';

const MiniCartPanel = ({cartItems}) => {
    // const [isMiniCartVis, setisMiniCartVis] = useState(true);

    return (
        <React.Fragment>
        {/* {isMiniCartVis ? */} 
            <div className='miniCartPanel'>
                {cartItems.length > 0 ? <MiniCart /> : <EmptyMiniCart />}
                <div className='miniCartClose' /* onClick={() => setisMiniCartVis(false)} */>X</div>
            </div> {/* : null } */}
        </React.Fragment>
    )
}

export default MiniCartPanel;