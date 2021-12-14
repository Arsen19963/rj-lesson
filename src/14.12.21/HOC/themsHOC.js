
const themsHOC = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => (
        <div style={{fontSize: "2rem", display:"flex"}}>
            <WrappedComponent {...props} />
            <span style={{fontSize: ".8rem"}}>boomyerang</span>
        </div>
    )
    return hocComponent;
}
export default themsHOC;