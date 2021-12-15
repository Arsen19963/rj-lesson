import React from 'react'
import PropTypes from 'prop-types'
import { UsersContext } from '../App'
// import { UsersConsumerHoc } from '..Hoc/Hoc';


const UsersConsumerHoc = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => (
        <UsersContext.Consumer>
           {
               (value)=>  <WrappedComponent {...props} users={value} />
           }
        </UsersContext.Consumer>
    )

  

    return hocComponent
}
export default UsersConsumerHoc;