function CareScale({scaleValue, careType}) {
    const scaleType = careType === 'light' ? '☀️' : '💧'
    const range = [1, 2, 3, 4, 5]
    const quantityLabel = {
        1: 'pas du tout',
        2: 'peu',
        3: 'modérément',
        4: 'beaucoup',
        5: 'vraiment beaucoup...'
    }
    return (
        <div
            onClick={() =>
                alert(
                    `Cette plante requiert ${quantityLabel[scaleValue]} ${
                        careType === 'light' ? 'de lumière' : "d'arrosage"
                    }`
                )
            }
        >

            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale