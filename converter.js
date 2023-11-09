function cal1() {

    const fromValue = myform.from_value.value;
    const fromUnit = myform.from_unit.value;
    const toValue = myform.to_value;
    const toUnit = myform.to_unit.value;

    let multiplier = 1;
    
    if(fromUnit === 'Litres'){
        if(toUnit === 'Gallons'){
            multiplier = 0.264172052
        }else if(toUnit === 'Litres'){
            multiplier = 1
        }

    }else if(fromUnit === 'Gallons'){
        if(toUnit === 'Gallons'){
            multiplier = 1;
        }else if(toUnit === 'Litres'){
            multiplier = 3.78541178;  
        }
    }

    const value = fromValue * multiplier;
    toValue.value = Math.round(value * 100) /100;

    return false;
}

function cal2() {
    const fromValue2 = myform.from_value2.value;
    const fromUnit2 = myform.from_unit2.value;
    const toValue2 = myform.to_value2;
    const toUnit2 = myform.to_unit2.value;

    let multiplier = 1;
    
    if(fromUnit2 === 'Feet'){
        if(toUnit2 === 'Metres'){
            multiplier = 0.3048
        }else if(toUnit2 === 'Feet'){
            multiplier = 1
        }

    }else if(fromUnit2 === 'Metres'){
        if(toUnit2 === 'Metres'){
            multiplier = 1;
        }else if(toUnit2 === 'Feet'){
            multiplier = 3.2808399;  
        }
    }

    const value = fromValue2 * multiplier;
    toValue2.value = Math.round(value * 100) / 100;

    return false;
}

function cal3() {
    const fromValue3 = myform.from_value3.value;
    const fromUnit3 = myform.from_unit3.value;
    const toValue3 = myform.to_value3;
    const toUnit3 = myform.to_unit3.value;


    let multiplier = 1;
    
    if(fromUnit3 === 'Square Feet'){
        if(toUnit3 === 'Square Metres'){
            multiplier = 0.09290304
        }else if(toUnit3 === 'Square Feet'){
            multiplier = 1
        }

    }else if(fromUnit3 === 'Square Metres'){
        if(toUnit3 === 'Square Metres'){
            multiplier = 1;
        }else if(toUnit3 === 'Square Feet'){
            multiplier = 10.7639104;  
        }
    }

    const value = fromValue3 * multiplier;
    toValue3.value = Math.round(value * 100) / 100;

    return false;
}

function cal4() {
    const fromValue4 = myform.from_value4.value;
    const fromUnit4 = myform.from_unit4.value;
    const toValue4 = myform.to_value4;
    const toUnit4 = myform.to_unit4.value;

    let multiplier = 1;
    
    if(fromUnit4 === 'Cubic Feet'){
        if(toUnit4 === 'Cubic Metres'){
            multiplier = 0.0283168466
        }else if(toUnit4 === 'Cubic Feet'){
            multiplier = 1
        }

    }else if(fromUnit4 === 'Cubic Metres'){
        if(toUnit4 === 'Cubic Metres'){
            multiplier = 1;
        }else if(toUnit4 === 'Cubic Feet'){
            multiplier = 35.3146667;  
        }
    }

    const value = fromValue4 * multiplier;
    toValue4.value = Math.round(value * 100) / 100;

    return false;
}
