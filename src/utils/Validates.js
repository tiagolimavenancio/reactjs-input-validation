class Validates {
    static isEmpty(str) {
        return (!str || str === undefined || str === "" || str.length === 0)
    }

    static validateCPF(cpf) {
        const reg =  /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
        return reg.test(cpf);
    }

    static validateCPFLength(cpf) {
        const aux = cpf.replace(/\D/g, '');
        return aux.length < 11;
    }

    static isValidEmail(email) {        
        const reg =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    static minLengthValidator(value, minLength) {
        return value.length >= minLength
    }

    static confirmPassword(confirmPassword, password) {
        return confirmPassword === password;
    }

    static validateZipCode(zipcode) {
        const zip = /^[0-9]{5}(?:-[0-9]{3})?$/;
        return zip.test(zipcode);
    }

    static validatePhone(phone) {        
        const number = '';
        return number.test(phone);
    }

    static validateNumber(number) {
        return Number.isInteger(number)
    }

    static validate(value, rules) {
        let isValid = true;
        let message = '';                

        for (let rule in rules) { 
            switch (rule) {
                case 'isRequired': {                    
                    isValid = isValid && !this.isEmpty(value);                      
                    message = !isValid && 'This field is required';                            
                    break;
                }                
                case 'isEmail': {
                    isValid = isValid && this.isValidEmail(value);
                    message = !isValid && 'Please enter a valid email address';                    
                    break;
                }
                case 'minLength': {
                   isValid = isValid &&  this.minLengthValidator(value, rules[rule]);                                                                                                     
                   message = !isValid && `The password must be at least ${rules[rule]} characters long!`;                                 
                   break;                 
                }
                case 'isCEP': {
                    isValid = isValid && this.validateZipCode(value);
                    message = !isValid && 'Please enter a valid CEP';  
                    break;
                }
                default: {
                    isValid = true;                 
                }
            }
        }

        return { isValid, message };
    }

    static validator(values) {
        let validation  = {};

        Object.keys(values).map((item) => {
            const { isValid, message } = this.validate(values[item].value, values[item].rules)                        
            validation[item] = { isValid, message }            
        })

        return validation;
    }
}

export default Validates;