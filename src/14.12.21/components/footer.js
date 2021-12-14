import React from 'react';
import themsHOC from '../HOC/themsHOC';

export default function Footer({list}) {
    console.log("list", list)
    return (
        <div>
            Footer
        </div>
    )
}

export const WrappedFooter = themsHOC(Footer);