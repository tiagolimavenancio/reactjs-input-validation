export function next() {    
    return {
        type: 'NEXT_STEP'
    }
}

export function previous() {
    return {
        type: 'PREVIOUS_STEP'
    }
}
