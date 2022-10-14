function CareScale({scaleValue, careType}) {
    const scaleType = careType === 'light' ? '☀️' : '💧'
    const range = [1,2,3,4,5]
    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale