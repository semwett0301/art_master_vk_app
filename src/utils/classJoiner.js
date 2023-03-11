export function classJoiner(...classes){
    if (Array.isArray(classes)){
        return classes.join(' ')
    }

    return classes
}
