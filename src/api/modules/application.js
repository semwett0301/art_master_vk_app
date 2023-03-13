export default function (instance) {
    return (data) => {
        instance.post('join', data)
    }
}
