function Recommendation() {
    const month = new Date().getMonth()
    const isSpringTime = month >= 2 && month <=5
    if(!isSpringTime){
        return <div>not summer time...</div>
    }
    return <div>Its summer time</div>
}

export default Recommendation