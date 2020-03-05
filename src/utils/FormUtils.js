class FormUtils {
    static validator(arg) {
        const isValid = Object.keys(arg).length && Object.keys(arg).every((key) => arg[key].isValid)
        return isValid
    }
}

export default FormUtils;