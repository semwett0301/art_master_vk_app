import fileLogo from '../../components/UI/FilePicker/img/paper-clip.svg'

const configNameToAlias = {
    photograph: 'Фотограф'
}

export const config = {
    photograph: {
        components: {
            firstColumn: [
                {
                    type: 'TextField',
                    name: 'about',
                    props: {
                        label: 'О себе',
                        placeholder: 'Опишите ваши интересы и цели в жизни, в том числе профессиональные.   ',
                        required: true,
                        bottomDescription: 'Ответьте на следующие вопросы: «Почему я решил участвовать в Чемпионате?», «Каких целей я хочу здесь достичь?»'
                    },
                    validation: {
                        required: true
                    }
                }
            ],
            secondColumn: [
                {
                    type: 'FilePicker',
                    name: 'video',
                    props: {
                        label: 'Видеовизитка',
                        placeholder: 'Выбрать',
                        description: 'Информация «О себе» может быть представлена в формате видеопрезентации себя и своего творчества.',
                        instruction: 'Длительность — не более 1 мин.',
                        multiple: false,
                        imgSrc: fileLogo,
                        buttonLabel: 'Загрузить'
                    },
                    validation: {}
                },
                {
                    type: 'FilePicker',
                    name: 'professional',
                    props: {
                        label: 'Профессиональные достижения',
                        placeholder: 'Выбрать',
                        description: 'Сканы дипломов/сертификатов наиболее значимых профессиональных наград, конкурсов.',
                        instruction: 'Формат: pdf',
                        imgSrc: fileLogo,
                        buttonLabel: 'Загрузить'
                    },
                    validation: {}
                },
                {
                    type: 'TextInput',
                    name: 'honest',
                    props: {
                        label: 'Ваши поводы для гордости',
                        placeholder: 'Перечислите через запятую',
                        bottomDescription: 'Перечислите чем, какими проектами и событиями в своей жизни вы гордитесь',
                        required: true
                    },
                    validation: {
                        required: true
                    }
                },
                {
                    type: 'FilePicker',
                    name: 'examples',
                    props: {
                        label: 'Примеры работ',
                        placeholder: 'Выбрать',
                        required: true,
                        description: ['Старайтесь в портфолио отобразить наибольшее количество разных жанров, приветствуется преобладание снимком с участием людей.',
                            'Мы ожидаем увидеть работы в следующих жанрах: портрет, репортаж, художественная авторская фотография, а также работы в любых других жанрах, в которых вы работаете.',
                            'Портфолио должно отражать ваш стиль, взгляд на мир, профессиональные навыки и стилистическое многообразие.'],
                        instruction: ['Формат: pdf.', 'Размер презентации не должен превышать 50 Мб.'],
                        format: '.pdf',
                        multiple: false,
                        imgSrc: fileLogo,
                        buttonLabel: 'Загрузить'
                    },
                    validation: {
                        required: true
                    }
                }
            ]
        },
        text: 'Критерии оценки:\nКачество портфолио: соответствие формальным ' +
            'требованиям оформления и информативности.\nКачество представленных работ: наличие работ ' +
            'максимального количества жанров, отсутствие технического брака (или его оправданность творческим приемом), ' +
            'композиция кадра, работа со светом, колористическое решение кадра' +
            ' или оправданность перевода в ч/б, постпродакшен, художественный образ и ' +
            'художественное решение.\nОценка за портфолио — 60 баллов.'
    }
}
