export default function (instance) {
    return (data) => instance.post('profile', data)
}
