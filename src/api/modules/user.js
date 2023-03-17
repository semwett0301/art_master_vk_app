export default function (instance) {
    return (vk_id) => instance.get('auth', {
        params: {
            vk_id: vk_id
        }
    })
}
