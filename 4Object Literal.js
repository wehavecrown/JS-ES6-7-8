function addressMaker(city, state){
    const newAddressShort = {city, state}
    //OR
    const newAddressLong = {newCity: city, newState: state}
    //OR
    const newAddressSame = {city: city, state: state}

    console.log(newAddressShort)
    console.log(newAddressLong)
}

addressMaker('Austin', 'Texas')