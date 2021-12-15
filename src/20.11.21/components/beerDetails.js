import React from 'react';
import { useParams } from 'react-router-dom';

export default function BeerDetails() {
    const params = useParams();
    console.log(params);
    return (
        <div>
            Details
        </div>
    )
}
