// validate description function 
export const validateDescription = description => 
    description ? null : 'You must enter a description!';

// validate instock and quantity 
export const validateQuantity = (quantity, inStock) => 
    inStock && quantity === '0'
    ? 'An in stock item should have a quantity'
    : null;

// validate price function 
export const validatePrice = price => {
    const regex = /^[0-9]+(\.[0-9][0-9])$/;
    if (!price || price === '0.00') {
        return 'You must enter a price!'
    } else if (!regex.test(price.trim())){
        return 'Please enter a valid price!';
    }

    return null;
}